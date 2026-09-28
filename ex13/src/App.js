import { useCallback, useEffect, useState } from 'react';
import './App.css';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      setStatus('loading');
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error('Không thể tải bài viết.');
        setPosts(await response.json());
        setStatus('success');
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error');
      }
    }

    fetchPosts();
    return () => controller.abort();
  }, [userId]);

  if (status === 'loading') return <p>Đang tải bài viết...</p>;
  if (status === 'error') return <p className="error">Không tải được dữ liệu. Hãy thử lại.</p>;

  return (
    <div className="posts">
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    setTimeRemaining(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (timeRemaining <= 0) return undefined;

    const timerId = setInterval(() => {
      setTimeRemaining((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]);

  return <p className="timer">Time Remaining: {timeRemaining}</p>;
}

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Window size: {windowSize.width} x {windowSize.height}</p>;
}

function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div className="validated-input">
      <label htmlFor="name">Tên của bạn</label>
      <input
        id="name"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={isValid ? '' : 'invalid'}
        placeholder="Nhập ít nhất 3 ký tự"
      />
      {!isValid && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default function App() {
  const [userId, setUserId] = useState(1);
  const [timerStart, setTimerStart] = useState(10);
  const validateName = useCallback(
    (value) => value.length === 0 || value.trim().length >= 3,
    [],
  );

  return (
    <main>
      <header>
        <p className="eyebrow">React Hooks</p>
        <h1>Exercise 13: useEffect</h1>
        <p>Ví dụ hoàn chỉnh cho data fetching, timer, event listener và validation.</p>
      </header>

      <section>
        <h2>1. Data Fetching</h2>
        <label htmlFor="user-id">User ID</label>
        <select id="user-id" value={userId} onChange={(event) => setUserId(Number(event.target.value))}>
          {[1, 2, 3, 4, 5].map((id) => <option key={id} value={id}>User {id}</option>)}
        </select>
        <UserPosts userId={userId} />
      </section>

      <section>
        <h2>2. Countdown Timer</h2>
        <div className="controls">
          <CountdownTimer initialValue={timerStart} />
          <button type="button" onClick={() => setTimerStart((value) => value + 10)}>Thêm 10 giây</button>
        </div>
      </section>

      <section>
        <h2>3. Window Resize Listener</h2>
        <WindowSize />
      </section>

      <section>
        <h2>4. Form Input Validation</h2>
        <ValidatedInput
          validationFunction={validateName}
          errorMessage="Tên phải có ít nhất 3 ký tự."
        />
      </section>
    </main>
  );
}
