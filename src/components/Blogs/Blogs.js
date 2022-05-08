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
          2.When should you use{" "}
          <span className="bg-slate-200 px-1 rounded">Nodejs</span>and When you
          should you use Mongodb?
        </h2>

        <ul className="text-left list-decimal">
          <p className="my-4">There are 3 main services I like:</p>
          <li>
            <span className="font-bold">use nodejs:</span>
            <p>
              Since we have outlined the advantages and disadvantages of
              Node.js, let's see how they translate into the practical aspects.
              We will try to determine when to use Node.js and what is Node.js
              used for in web development in order to achieve the best
              application performance.
            </p>
            <ul className="text-left list-disc list-inside">
              <li>Real-time applications</li>
              <li>IoT applications</li>
              <li>Collaborative tools.</li>
              <li>Data streaming applications.</li>
              <li>Applications relying on scalability.</li>
            </ul>
            <p>
              Node.js is not good: While there are quite a number of use cases
              that Node.js fits perfectly, there are situations when you should
              look for other platforms, as Node.js will not provide the best
              performance.
              <ul className="text-left list-disc list-inside">
                <li>Applications with heavy computing server-side</li>
                <li>CRUD applications.</li>
                <li>Server-side web applications with relational databases.</li>
              </ul>
            </p>
          </li>
          <li>
            <span className="font-bold">Mongo DB:</span>
            <ul className="text-left list-disc list-inside">
              <p>
                Since, MongoDB is a NoSQL database, so we need to understand
                when and why we need to use this type of database in the
                real-life applications. Since in normal circumstances, MongoDB
                always preferred by the developers or project managers when our
                main concern is the deal with large volume of data with a high
                performance. If we want to insert thousands of records in a
                second, then MongoDB is the best choice for that. Also,
                horizontal scaling (adding new columns) is not so easy process
                in any RDBMS systems. But in case of MongoDB, it is very much
                easy since it is a schema less database. Also, this type of work
                can be directly handled by the application automatically. There
                is no need to any type of administrative work for perform any
                type of horizontal scaling in the MongoDB. MongoDB is good for
                the below types of situations :
              </p>
              <li>E-Commerce type of product-based applications</li>
              <li>Blog and Content Management systems</li>
              <li>High Speed logging, caching etc in the Real time</li>
              <li>Need to maintain location wise Geospatial data</li>
              <li>
                For maintains data related to the Social and Networking types
              </li>
              <li>
                If application is a loosely coupled mechanism means design may
                change at any point of time.
              </li>
            </ul>
            <p>
              MongoDB is not only database which can perform only CRUD (Create,
              Read, Update and Delete) operations with the data. Except these,
              MongoDB also contains so many important features due which MongoDB
              become the most popular database in the NoSQL category
            </p>
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
