import React from "react";

const Blogs = () => {
  return (
    <div className="md:mx-5 mx-3 grid md:grid-cols-3 grid-cols-1 gap-3">
      <div className="shadow-xl rounded-lg border border-sky-800 px-10 py-5 my-5">
        <h2 className=" text-xl font-mono font-bold">
          1.Difference between{" "}
          <span className="bg-slate-200 px-1 rounded">Node.JS</span> and{" "}
          <span className="px-1 bg-slate-200 rounded">Javascript?</span>
        </h2>
        <ul className="text-left my-5 list-decimal">
          <span className="font-bold">NodeJS :</span>
          <p>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </p>
          <li>NodeJS is a Javascript runtime environment.</li>
          <li>
            We can run Javascript outside the browser with the help of NodeJS.
          </li>
          <li>Nodejs does not have capability to add HTML tags</li>
          <li>
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript.
          </li>
        </ul>
        <ul className="text-left my-5 list-decimal">
          <span className="font-bold">JavaScript : </span>
          <p>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.{" "}
          </p>
          <li>
            Javascript is a programming language that is used for writing
            scripts on the website.
          </li>
          <li>Javascript can only be run in the browsers.</li>
          <li>It is basically used on the client-side.</li>
          <li>
            Javascript is capable enough to add HTML and play with the DOM.
          </li>
        </ul>
      </div>
      <div className="shadow-xl rounded-lg border border-sky-800 px-10 py-5 my-5">
        <h2 className=" text-xl font-mono font-bold">
          2.Why are you using{" "}
          <span className="bg-slate-200 px-1 rounded">firebase</span>? What
          other options do you have to implement authentication?
        </h2>

        <ul className="text-left list-decimal">
          <p className="my-4">There are 3 main services I like:</p>
          <li>
            <span className="font-bold">Apps development:</span>
            <ul className="text-left list-disc list-inside">
              <li>Firebase web</li>
              <li>Firebase Auth</li>
              <li>Cloud storage</li>
              <li>Realtime Database</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Quality Improvement:</span>
            <ul className="text-left list-disc list-inside">
              <li>Firebase crashlytics</li>
              <li>Performance Monitoring Tools</li>
              <li>Firebase test lab</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Instrument for Business group:</span>
            <ul className="text-left list-disc list-inside">
              <li>Firebase in-app messaging</li>
              <li>Firebase A/B Testing</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="shadow-xl rounded-lg border border-sky-800 px-10 py-5 my-5">
        <h2 className=" text-xl font-mono font-bold">
          3. What other services does{" "}
          <span className="bg-slate-200 px-1 rounded">firebase</span> provide
          other than authentication.
        </h2>
        <ul className="text-left my-5 list-decimal list-inside">
          <span className="font-bold">It provides,</span>
          <li>Realtime database.</li>
          <li>Cloud storage.</li>
          <li>Test lab.</li>
          <li>Performance Monitoring Tools.</li>
          <li>In-app messaging for business.</li>
        </ul>
        <a
          href="https://mongodb.com/docs/"
          className="bg-blue-400 py-2 px-4 rounded hover:bg-sky-500 transition"
          target="_blank"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Blogs;
