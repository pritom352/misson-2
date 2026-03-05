1. What is JSX, and why is it used?

JSX এর পূর্ণরূপ JavaScript XML। এটি React-এ JavaScript এর ভিতরে HTML-এর মতো syntax ব্যবহার করে UI লিখতে সাহায্য করে। এর ফলে কোড সহজে পড়া ও লেখা যায়।

2. What is the difference between State and Props?

Props হলো parent component থেকে child component-এ data পাঠানোর জন্য ব্যবহৃত read-only value।
State হলো component-এর নিজস্ব পরিবর্তনশীল data, যা পরিবর্তন হলে component আবার render হয়।

3. What is the useState hook, and how does it work?

useState হলো React-এর একটি Hook যা functional component-এ state manage করার জন্য ব্যবহার করা হয়।
State পরিবর্তন করলে React component-কে আবার render করে UI আপডেট করে।

4. How can you share state between components in React?

React-এ state share করার জন্য সাধারণত state-কে common parent component-এ নেওয়া হয় (lifting state up) এবং তারপর props এর মাধ্যমে child component-গুলোতে পাঠানো হয়।

5. How is event handling done in React?

React-এ event handling করা হয় JavaScript function ব্যবহার করে এবং event-গুলো camelCase format-এ লেখা হয়। Event trigger হলে সেই function execute হয়।
