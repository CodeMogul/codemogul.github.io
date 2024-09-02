import { h } from 'preact';

const summaryItems = [
  "Experienced Engineering Manager with a robust background in software development and leading high-performing engineering teams.",
  "Close to 8 YOE in building Distributed and Scalable systems at top B2B Product companies.",
  // "Proﬁcient in cutting-edge tech stacks for both Backend and Frontend Technologies.",
  "Adept at managing cross-functional teams, mentoring engineers, and ensuring alignment with organizational goals.",
  // "Skilled in leveraging technical expertise to achieve operational excellence and foster a collaborative work environment."
];

export default function Summary() {
  return (
    <section>
      <h2>Summary</h2>
      <ul>
        {summaryItems.map(item => <li>{item}</li>)}
      </ul>
    </section>
  )
}
