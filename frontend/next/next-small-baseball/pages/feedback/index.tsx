import { useRef, useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';

function FeedbackPage(props: any) {
  const [items, setItems] = useState(props.data);
  const [feedback, setFeedback] = useState<any>();

  const emailRef = useRef<any>();
  const feedbackRef = useRef<any>();

  function submitFormHandler(event: any) {
    event.preventDefault();
    const reqBody = {
      email: emailRef.current.value,
      text: feedbackRef.current.value,
    };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then((res) => setItems(res.data));
  }

  function loadFeedbackDetailsHandler(id: any) {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((res) => setFeedback(res.data));
  }

  return (
    <div>
      <h1>The Feedback Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" ref={feedbackRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={loadFeedbackDetailsHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      data,
    },
  };
}

export default FeedbackPage;
