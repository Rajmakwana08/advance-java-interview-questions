import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. What is JDBC? Explain JDBC Architecture. (Definition + Application, DriverManager, Driver, DB)",
      answer: "📌 Very high probability long answer",
      codeExample: `
🔹 What is JDBC?

JDBC (Java Database Connectivity) is an API that allows Java programs to connect and interact with 
databases.


👉 Using JDBC, a Java application can:

Connect to a database
Insert data
Update data
Delete data
Retrieve data

📌 In short:
JDBC = Bridge between Java program and Database


🔹 Definition (Exam Ready)

JDBC is a Java API that enables Java applications to communicate with databases using SQL 
statements.

🔹 Why JDBC is needed? (Application of JDBC)

JDBC is used when we want to:
Store data permanently
Fetch records from database
Perform CRUD operations (Create, Read, Update, Delete)


📌 Applications of JDBC:

Banking systems
Student management system
Online shopping websites
Railway / Flight reservation system
Employee management system


🔹 JDBC Architecture (Simple Explanation)

JDBC Architecture explains how Java application connects to database using JDBC components.

Components of JDBC Architecture:

1. Java Application
2. JDBC API
3. DriverManager
4. JDBC Driver
5. Database


🔹 JDBC Architecture Diagram (ASCII)

+--------------------+
|  Java Application  |
|  (Your Java Code)  |
+--------------------+
          |
          | JDBC API
          v
+--------------------+
|   DriverManager    |
| (Manages Drivers)  |
+--------------------+
          |
          | JDBC Driver
          v
+--------------------+
|   JDBC Driver      |
| (DB Specific Code) |
+--------------------+
          |
          | SQL Queries
          v
+--------------------+
|     Database       |
| (MySQL / Oracle)   |
+--------------------+



🔹 Explanation of Each Component

1️⃣ Java Application

This is the Java program written by the programmer
It sends SQL queries using JDBC

📌 Example:

SELECT * FROM student;


2️⃣ JDBC API

Provides classes and interfaces
Used to connect and execute SQL queries

📌 Example packages:

java.sql
javax.sql


3️⃣ DriverManager

Acts as a manager
Loads the JDBC driver
Establishes connection between Java program and database

📌 Important method:

DriverManager.getConnection()


4️⃣ JDBC Driver

Converts Java requests into database-specific language
Different databases have different drivers

📌 Examples:

MySQL → mysql-connector
Oracle → oracle.jdbc.driver


5️⃣ Database (DB)

Stores data permanently
Executes SQL queries
Returns result to Java application

📌 Examples:

MySQL
Oracle
PostgreSQL


🔹 Flow of JDBC Working (Easy Steps)

1️⃣ Java program sends SQL query
2️⃣ JDBC API receives the query
3️⃣ DriverManager selects the correct driver
4️⃣ JDBC Driver communicates with database
5️⃣ Database sends result back
6️⃣ Java application receives output


🔹 One-Line Summary (For Revision)

JDBC allows Java applications to connect, send SQL commands, and retrieve data from databases 
using JDBC drivers.
      
      `
    },
    {
      id: 2,
      question: "2. Explain JDBC Components. DriverManager, Driver, Connection, Statement, ResultSet, SQLException",
      answer: "👉 Direct theory question",
      codeExample: `
  ⭐ JDBC Components

JDBC components are the main building blocks used to connect Java programs with databases.


1️⃣ DriverManager

DriverManager is a class that manages JDBC drivers.

👉 It:

Loads JDBC driver
Creates connection between Java program and database

Key Points:

Part of java.sql package
Uses getConnection() method

Example:

Connection con = DriverManager.getConnection(url, user, password);


📌 In simple words:
DriverManager is a middleman between Java application and database driver.



2️⃣ Driver

Driver is an interface that handles communication with the database.

👉 It:

Converts Java commands into database-specific commands
Different databases use different drivers

Examples:

MySQL Driver
Oracle Driver

📌 In simple words:
Driver understands database language.



3️⃣ Connection

Connection is an interface that represents a connection between Java program and database.

👉 It:

Allows Java program to send SQL queries
Is created using DriverManager

Example:
Connection con = DriverManager.getConnection(...);


📌 In simple words:
Connection is a link between Java and database.



4️⃣ Statement

Statement is an interface used to execute SQL queries.

👉 It:

Sends SQL commands to database
Used for SELECT, INSERT, UPDATE, DELETE

Types:

Statement
PreparedStatement
CallableStatement

Example:
Statement st = con.createStatement();
st.executeQuery("SELECT * FROM student");


📌 In simple words:
Statement sends SQL instructions to database.



5️⃣ ResultSet

ResultSet is an interface that stores data returned from database.

👉 It:

Holds records from SELECT query
Moves row by row

Example:
ResultSet rs = st.executeQuery("SELECT * FROM student");


📌 In simple words:
ResultSet stores the output data.



6️⃣ SQLException

SQLException is a class used to handle database errors.

👉 It occurs when:

Wrong SQL syntax
Connection failure
Database not found

Example:

catch(SQLException e) {
    System.out.println(e);
}


📌 In simple words:
SQLException handles database-related errors.


⭐ JDBC Components Summary Table

| Component     | Purpose                              |
| ------------- | ------------------------------------ |
| DriverManager | Manages drivers & creates connection |
| Driver        | Communicates with database           |
| Connection    | Connects Java to DB                  |
| Statement     | Executes SQL queries                 |
| ResultSet     | Stores query result                  |
| SQLException  | Handles DB errors                    |


⭐ Easy Memory Trick 🧠

D D C S R E

➡️ DriverManager → Driver → Connection → Statement → ResultSet → Exception
      
      `
    },
    {
      id: 3,
      question: "3. Explain Types of JDBC Drivers with advantages & disadvantages. JDBC-ODBC Bridge, Native API Driver, Network Protocol Driver, Thin Driver ⭐⭐",
      answer: "👉 Exam favorite",
      codeExample: `
⭐ Types of JDBC Drivers

JDBC drivers are used to connect Java applications with databases.
There are four types of JDBC drivers:

1️⃣ JDBC-ODBC Bridge Driver (Type 1)

This driver uses ODBC (Open Database Connectivity) to connect Java application with database.

Working:

Java Program → JDBC → ODBC → Database

Advantages:

✔ Easy to use
✔ Useful for learning JDBC

Disadvantages:

❌ Slow performance
❌ Needs ODBC installed
❌ Not suitable for web applications
❌ Not used in real projects

📌 Note:
This driver is deprecated and not used now.



2️⃣ Native API Driver (Type 2)

This driver uses database’s native libraries.

Working:

Java Program → JDBC → Native API → Database

Advantages:

✔ Better performance than Type 1
✔ Direct communication with database

Disadvantages:

❌ Platform dependent
❌ Requires native libraries on client machine

📌 Example:
Oracle OCI driver



3️⃣ Network Protocol Driver (Type 3)

This driver uses a middleware server to connect Java application and database.

Working:

Java Program → JDBC → Middleware → Database

Advantages:

✔ No database driver needed on client
✔ Can connect to multiple databases

Disadvantages:

❌ Slower due to network
❌ Middleware setup is costly



4️⃣ Thin Driver (Type 4) ⭐⭐

This driver is written completely in Java and communicates directly with the database.

Working:

Java Program → JDBC → Database

Advantages:

✔ Platform independent
✔ High performance
✔ No extra software required
✔ Most widely used driver

Disadvantages:

❌ Database-specific driver required

📌 Example:
MySQL Connector/J


⭐ Comparison Table (Very Important for Exam)

| Type   | Driver Name      | Performance | Platform Dependent | Usage         |
| ------ | ---------------- | ----------- | ------------------ | ------------- |
| Type 1 | JDBC-ODBC        | Low         | Yes                | ❌ Not used  |
| Type 2 | Native API       | Medium      | Yes                | Limited       |
| Type 3 | Network Protocol | Medium      | No                 | Rare          |
| Type 4 | Thin Driver      | High        | No                 | ⭐ Most Used |


⭐ Easy Memory Trick 🧠

1 → ODBC
2 → Native
3 → Network
4 → Thin (Best)


⭐ One-Line Exam Summary

Thin Driver (Type 4) is the most efficient and commonly used JDBC driver because it is platform 
independent and provides high performance.
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>ADVANCE JAVA Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
