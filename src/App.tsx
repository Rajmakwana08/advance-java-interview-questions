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
      id: 4,
      question: "4. Explain Steps to establish JDBC connection. 👉 With method names (Class.forName, getConnection, createStatement)",
      answer: "",
      codeExample: `
⭐ Steps to Establish JDBC Connection

To connect a Java application with a database using JDBC, we follow 5 main steps.



1️⃣ Load and Register the Driver

👉 Method: Class.forName()

This step loads the JDBC driver class into memory.

Why needed?

  So Java knows which database driver to use

Method used:
Class.forName("com.mysql.cj.jdbc.Driver");


📌 In simple words:
This step tells Java: “Use MySQL driver”.



2️⃣ Establish Connection

👉 Method: DriverManager.getConnection()

This step creates a connection between Java program and database.

Method used:
Connection con = DriverManager.getConnection(url, username, password);


📌 In simple words:
This step connects Java to database using URL, username, and password.



3️⃣ Create Statement

👉 Method: createStatement()

This step creates a Statement object to send SQL queries to the database.

Method used:
Statement st = con.createStatement();


📌 In simple words:
Statement is used to execute SQL commands.



4️⃣ Execute SQL Query

👉 Methods:

executeQuery() → for SELECT
executeUpdate() → for INSERT, UPDATE, DELETE

Example:
ResultSet rs = st.executeQuery("SELECT * FROM student");


📌 In simple words:
This step runs SQL query on database.



5️⃣ Close the Connection

👉 Method: close()

This step closes all opened resources.

Example:
con.close();


📌 In simple words:
This step releases database resources.


⭐ JDBC Connection Steps Flow (Easy Recall)

Load Driver
     ↓
Create Connection
     ↓
Create Statement
     ↓
Execute Query
     ↓
Close Connection



⭐ Methods Summary Table (Exam-Friendly)

| Step             | Method Name         | Purpose               |
| ---------------- | ------------------- | --------------------- |
| Load Driver      | Class.forName()     | Loads JDBC driver     |
| Connect DB       | getConnection()     | Creates DB connection |
| Create Statement | createStatement()   | Sends SQL             |
| Execute Query    | executeQuery()      | Runs SELECT           |
| Close            | close()             | Free resources        |


⭐ One-line Exam Answer (Very Useful)

JDBC connection is established by loading the driver, creating a connection using getConnection(), 
creating a statement using createStatement(), executing SQL queries, and finally closing the 
connection.




✅ Full JDBC Program (Using Thin Driver – MySQL)

// Step 1: Import required packages
import java.sql.*;

class JDBCExample {
    public static void main(String[] args) {

        try {
            // Step 2: Load and Register JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Driver class loaded into memory

            // Step 3: Establish Connection
            String url = "jdbc:mysql://localhost:3306/college";
            String user = "root";
            String password = "root";

            Connection con = DriverManager.getConnection(url, user, password);
            // Connection created between Java and Database

            // Step 4: Create Statement
            Statement st = con.createStatement();
            // Statement object created to execute SQL query

            // Step 5: Execute SQL Query
            ResultSet rs = st.executeQuery("SELECT * FROM student");

            // Step 6: Process ResultSet
            while (rs.next()) {
                System.out.println(
                    rs.getInt(1) + " " +
                    rs.getString(2) + " " +
                    rs.getInt(3)
                );
            }

            // Step 7: Close Connections
            rs.close();
            st.close();
            con.close();

        } catch (ClassNotFoundException e) {
            System.out.println("Driver not found");
        } catch (SQLException e) {
            System.out.println("Database error");
        }
    }
}



🔁 JDBC Steps Mapping (Very Important for Exam)

Class.forName()        → Load Driver
getConnection()        → Create Connection
createStatement()     → Create Statement
executeQuery()        → Execute SQL
ResultSet              → Get Output
close()               → Close Resources


📝 Viva / Exam Tip

If examiner asks “Which driver is used?”
👉 Answer: Type 4 – Thin Driver
      `
    },
    {
      id: 5,
      question: "5. Differentiate between: Statement vs PreparedStatement vs CallableStatement",
      answer: "👉 High-scoring + short writing",
      codeExample: `
  ⭐ Statement vs PreparedStatement vs CallableStatement

These are JDBC interfaces used to execute SQL queries.


1️⃣ Statement

Statement is used to execute simple SQL queries without parameters.

Features:

SQL query written at runtime
No parameters
Slower execution
Not secure (SQL Injection possible)

Example:

Statement st = con.createStatement();
st.executeQuery("SELECT * FROM student");



2️⃣ PreparedStatement

PreparedStatement is used to execute pre-compiled SQL queries with parameters.

Features:

SQL query written once
Supports parameters (?)
Faster than Statement
More secure

Example:

PreparedStatement ps = con.prepareStatement(
    "SELECT * FROM student WHERE id=?"
);
ps.setInt(1, 101);
ResultSet rs = ps.executeQuery();



3️⃣ CallableStatement

CallableStatement is used to execute stored procedures in the database.

Features:

Calls stored procedures
Supports IN, OUT parameters
Used for complex operations
Faster for repeated tasks

Example:

CallableStatement cs = con.prepareCall("{call getStudent(?)}");
cs.setInt(1, 101);
ResultSet rs = cs.executeQuery();


⭐ Difference Table (Very Important ⭐⭐⭐)

| Feature       | Statement      | PreparedStatement | CallableStatement |
| ------------- | -------------- | ----------------- | ----------------- |
| SQL Type      | Simple SQL     | Pre-compiled SQL  | Stored Procedure  |
| Parameters    | ❌ No          | ✅ Yes (?)       | ✅ Yes (IN/OUT)   |
| Performance   | Slow           | Faster            | Fastest           |
| Security      | Low            | High              | High              |
| SQL Injection | Possible       | Not possible      | Not possible      |
| Use Case      | Simple queries | Repeated queries  | Complex DB logic  |
| Compilation   | Every time     | Once              | Once              |


⭐ Difference: Statement vs PreparedStatement vs CallableStatement

| Statement                   | PreparedStatement                  | CallableStatement              |
| --------------------------- | ---------------------------------- | ------------------------------ |
| Used for simple SQL queries | Used for parameterized SQL queries | Used to call stored procedures |
| Parameters not allowed      | Parameters allowed using ?       | IN / OUT parameters allowed    |
| Query compiled every time   | Query compiled once                | Procedure compiled once        |
| Slower performance          | Faster than Statement              | Fastest                        |
| Less secure                 | More secure                        | More secure                    |
| SQL Injection possible      | SQL Injection not possible         | SQL Injection not possible     |



⭐ Easy Memory Trick 🧠

Statement → Simple
PreparedStatement → Secure + Fast
CallableStatement → Stored Procedure

⭐ One-line Exam Answer

Statement is used for simple queries, PreparedStatement is used for parameterized queries with better 
performance and security, and CallableStatement is used to execute stored procedures.
      


----------------------------------------------------------------------------------------------------


⭐ Statement vs PreparedStatement vs CallableStatement

✅ Full Examples


1️⃣ Statement – Full Example

👉 Used for simple SQL queries (no parameters)

import java.sql.*;

class StatementExample {
    public static void main(String[] args) {

        try {
            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "root"
            );

            // Create Statement
            Statement st = con.createStatement();

            // Execute SQL Query
            ResultSet rs = st.executeQuery("SELECT * FROM student");

            // Process Result
            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name")
                );
            }

            // Close resources
            rs.close();
            st.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


📌 Use: Simple SELECT queries
📌 Problem: Not secure, slow for repeated queries



2️⃣ PreparedStatement – Full Example ⭐⭐

👉 Used for parameterized queries (recommended)

import java.sql.*;

class PreparedStatementExample {
    public static void main(String[] args) {

        try {
            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "root"
            );

            // Create PreparedStatement
            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM student WHERE id = ?"
            );

            // Set parameter value
            ps.setInt(1, 101);

            // Execute Query
            ResultSet rs = ps.executeQuery();

            // Process Result
            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name")
                );
            }

            // Close resources
            rs.close();
            ps.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


📌 Use: Secure, fast, reusable queries
📌 Best choice for real projects




3️⃣ CallableStatement – Full Example ⭐⭐⭐

👉 Used to call stored procedures

🔹 Stored Procedure (MySQL)

CREATE PROCEDURE getStudent(IN sid INT)
BEGIN
    SELECT * FROM student WHERE id = sid;
END;


🔹 Java Code

import java.sql.*;

class CallableStatementExample {
    public static void main(String[] args) {

        try {
            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "root"
            );

            // Create CallableStatement
            CallableStatement cs = con.prepareCall(
                "{call getStudent(?)}"
            );

            // Set input parameter
            cs.setInt(1, 101);

            // Execute
            ResultSet rs = cs.executeQuery();

            // Process Result
            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name")
                );
            }

            // Close resources
            rs.close();
            cs.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


📌 Use: Complex database logic, business rules
      `
    },
    {
      id: 6,
      question: "6. Short question.",
      answer: "",
      codeExample: `
JDBC stands for → Java Database Connectivity
Thin driver → Best performance
PreparedStatement → Precompiled & secure
CallableStatement → Stored procedures
ResultSetMetaData → Data about data
ACID → Atomicity, Consistency, Isolation, Durability
      
      `
    },
    {
      id: 11,
      question: "11. Explain Servlet Architecture & Execution Process.",
      answer: "📌 Very common long question",
      codeExample: `
⭐ What is Servlet?

A Servlet is a Java program that runs on a web server and handles client requests.

👉 It is used to create dynamic web applications.


⭐ Servlet Architecture

Servlet architecture shows how client request is processed by servlet using web container.


⭐ Main Components

1️⃣ Client (Browser)
2️⃣ Web Server
3️⃣ Servlet Container (Tomcat)
4️⃣ Servlet
5️⃣ Database (optional)



⭐ Servlet Architecture Diagram (Important ⭐)

        +-------------+
        |   Client    |
        |  (Browser)  |
        +------+------+
               |
               | HTTP Request
               v
        +-------------+
        | Web Server  |
        +------+------+
               |
               v
        +----------------------+
        | Servlet Container    |
        |  (Tomcat)            |
        +----------+-----------+
                   |
                   v
              +----------+
              | Servlet  |
              +----------+
                   |
                   v
             +------------+
             | Database   |
             +------------+

               ^
               |
        HTTP Response



⭐ 6 Steps of Servlet Execution Process ⭐⭐⭐


1️⃣ Client Sends Request

User sends request from browser using URL.

Example:

    http://localhost:8080/MyApp


2️⃣ Web Server Receives Request

Web server receives HTTP request and forwards it to Servlet Container.


3️⃣ Servlet Container Loads Servlet

If servlet is not loaded:

    Container loads servlet class
    Creates servlet object


4️⃣ init() Method is Called (Only Once)

Container calls:

    init()

👉 Used for initialization (database connection etc.)


5️⃣ service() Method is Called

For every request:

    service()

👉 It calls:

doGet() → For GET request
doPost() → For POST request


6️⃣ destroy() Method is Called

When server stops:

    destroy()

👉 Used to release resources


⭐ Execution Flow Summary

Client → Server → Container → init()
                             → service()
                             → doGet()/doPost()
                             → destroy()


⭐ Servlet Life Cycle Methods (Very Important)

| Method           | Purpose               |
| ---------------- | --------------------- |
| init()           | Initialization (once) |
| service()        | Handle request        |
| doGet()/doPost() | Process request       |
| destroy()        | Cleanup               |


⭐ One-Line Exam Answer

Servlet architecture consists of client, web server, servlet container and servlet. The servlet execution 
process includes loading, initialization, service handling, and destruction.


🧠 Memory Trick

Load → init → service → destroy



⭐ Simple Servlet Example Program

// Import required packages
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet
public class HelloServlet extends HttpServlet {

    // Step 1: init() method (called only once)
    public void init() throws ServletException {
        System.out.println("Servlet is initialized...");
    }

    // Step 2: doGet() method (called for each request)
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
                      throws ServletException, IOException {

        // Set response type
        response.setContentType("text/html");

        // Create PrintWriter object
        PrintWriter out = response.getWriter();

        // Send response to browser
        out.println("<html><body>");
        out.println("<h2>Hello, Welcome to Servlet!</h2>");
        out.println("</body></html>");

        System.out.println("Request processed...");
    }

    // Step 3: destroy() method (called once when server stops)
    public void destroy() {
        System.out.println("Servlet is destroyed...");
    }
}



⭐ Step 2: web.xml Configuration
<web-app>

  <servlet>
    <servlet-name>HelloServlet</servlet-name>
    <servlet-class>HelloServlet</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>HelloServlet</servlet-name>
    <url-pattern>/hello</url-pattern>
  </servlet-mapping>

</web-app>



⭐ How It Works

1️⃣ User enters:

http://localhost:8080/MyApp/hello


2️⃣ Servlet container:

Loads servlet
Calls init()
Calls doGet()
Sends response
Calls destroy() when server stops


⭐ Output in Browser

Hello, Welcome to Servlet!


⭐ Life Cycle Flow (Program Based)

Load Servlet
     ↓
init()  (only once)
     ↓
doGet() / doPost()  (every request)
     ↓
destroy() (when server stops)


⭐ Viva Important Points

Servlet extends HttpServlet
doGet() handles GET request
PrintWriter sends output to browser
init() runs once
destroy() runs once



⭐ Important Note (Modern Concept)

In newer versions (Servlet 3.0+):
We can use annotations instead of web.xml.

Example:

    @WebServlet("/hello")

So web.xml is optional in modern applications.


⭐ One-Line Viva Answer

👉 web.xml tells the server which servlet handles which URL.
`
    },
    {
      id: 12,
      question: "12. Explain Servlet Life Cycle with methods -> init(), service(), destroy()",
      answer: "📌 100% exam question",
      codeExample: `
⭐ Servlet Life Cycle

The Servlet Life Cycle describes how a servlet is:

👉 Loaded
👉 Initialized
👉 Handles requests
👉 Destroyed
      
It is controlled by the Servlet Container (Tomcat).


⭐ Life Cycle Diagram (Important for Exam ⭐)

        1. Loading
            ↓
        2. init()   (Called once)
            ↓
        3. service() (Called for each request)
            ↓
        4. destroy() (Called once)


⭐ 1️⃣ init() Method

🔹 Meaning:

Called only once when servlet is loaded.

🔹 Purpose:

Initialize resources
Open database connection
Load configuration

🔹 Syntax:

public void init() throws ServletException

🔹 Example:

public void init() {
    System.out.println("Servlet Initialized");
}

📌 Runs only one time.
      


⭐ 2️⃣ service() Method
🔹 Meaning:

Called every time client sends request.

🔹 Purpose:

Processes request

Generates response

🔹 Syntax:

public void service(HttpServletRequest req,
                    HttpServletResponse res)


🔹 Inside service():

It calls:

doGet() → For GET request
doPost() → For POST request


🔹 Example:

public void service(HttpServletRequest req,
                    HttpServletResponse res)
        throws ServletException, IOException {
    System.out.println("Request handled");
}

In HttpServlet, service() method internally calls doGet() and doPost(), so normally we override doGet() or 
doPost() instead of service().


📌 Runs multiple times (for each request).



⭐ 3️⃣ destroy() Method
🔹 Meaning:

Called only once before servlet is removed.

🔹 Purpose:

Close database connection
Release resources

🔹 Syntax:

public void destroy()

🔹 Example:

public void destroy() {
    System.out.println("Servlet Destroyed");
}

📌 Runs only once when server stops.



⭐ Complete Life Cycle Example

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LifeCycleServlet extends HttpServlet {

    public void init() {
        System.out.println("init() called");
    }

    public void service(HttpServletRequest req,
                        HttpServletResponse res)
            throws IOException {
        System.out.println("service() called");
    }

    public void destroy() {
        System.out.println("destroy() called");
    }
}


⭐ Life Cycle Summary Table

| Method    | Called When        | How Many Times |
| --------- | ------------------ | -------------- |
| init()    | When servlet loads | Once           |
| service() | For every request  | Multiple times |
| destroy() | Before removal     | Once           |


⭐ One-Line Exam Answer

Servlet life cycle consists of init(), service(), and destroy() methods managed by the servlet container.


🧠 Memory Trick

I → S → D

init → service → destroy
`
    },
    {
      id: 13,
      question: "13. Differentiate between CGI and Servlet",
      answer: "",
      codeExample: `
⭐ Difference Between CGI and Servlet

| CGI                                  | Servlet                                   |
| ------------------------------------ | ----------------------------------------- |
| Stands for Common Gateway Interface  | Java-based server-side technology         |
| Creates new process for each request | Uses single process with multiple threads |
| Slow performance                     | Faster performance                        |
| Written in C, C++, Perl etc.         | Written in Java                           |
| Platform dependent                   | Platform independent                      |
| High memory usage                    | Low memory usage                          |
| Less secure                          | More secure                               |
| Difficult to maintain                | Easy to maintain                          |


⭐ Why CGI is Slow?

In CGI:

For every client request:

    New process is created
    Memory is allocated
    Process is destroyed

This makes it slow and heavy.


⭐ Why Servlet is Fast?

In Servlet:

    Only one instance is created
    Multiple threads handle requests
    No new process each time

👉 That’s why servlet is much faster.


⭐ Simple Diagram (Easy to Draw)

CGI Model

Client → Server → New Process → Response
Client → Server → New Process → Response


Servlet Model

Client → Server → Single Servlet Instance
                     |
                   Threads
                     |
                  Response


⭐ One-Line Exam Answer

CGI creates a new process for every request, while Servlet uses multithreading in a single process, making 
it faster and more efficient.

🧠 Memory Trick

CGI → Process
Servlet → Thread

Process = Heavy
Thread = Light                  `
    },
    {
      id: 14,
      question: "14. Explain GenericServlet and HttpServlet 👉 Difference 👉 doGet() vs doPost()",
      answer: "📌 Important for theory + viva",
      codeExample: `
⭐ 1️⃣ GenericServlet
🔹 Meaning

GenericServlet is an abstract class in Java used to create servlets that are protocol-independent.

📌 It works with any protocol (HTTP, FTP etc.)

🔹 Package

javax.servlet

🔹 Important Point
You must override:

service()

Because GenericServlet does not support doGet() or doPost().


🔹 Example

import java.io.*;
import javax.servlet.*;

public class MyGenericServlet extends GenericServlet {

    public void service(ServletRequest req,
                        ServletResponse res)
            throws IOException {

        PrintWriter out = res.getWriter();
        out.println("Hello from GenericServlet");
    }
}



⭐ 2️⃣ HttpServlet
🔹 Meaning

HttpServlet is a subclass of GenericServlet used to create HTTP-based web applications.

📌 It works only with HTTP protocol.


🔹 Package

javax.servlet.http

🔹 Important Point

You override:

    doGet()
    doPost()

Instead of service().


🔹 Example

import java.io.*;
import javax.servlet.http.*;

public class MyHttpServlet extends HttpServlet {

    public void doGet(HttpServletRequest req,
                      HttpServletResponse res)
            throws IOException {

        PrintWriter out = res.getWriter();
        out.println("Hello from HttpServlet");
    }
}


⭐ Difference Between GenericServlet and HttpServlet

| GenericServlet                        | HttpServlet                                   |
| ------------------------------------- | --------------------------------------------- |
| Protocol independent                  | HTTP specific                                 |
| Overrides service()                   | Overrides doGet() / doPost()                  |
| Uses ServletRequest & ServletResponse | Uses HttpServletRequest & HttpServletResponse |
| Less powerful                         | More powerful                                 |
| Used rarely                           | Used commonly                                 |


⭐ doGet() vs doPost()

| doGet()                  | doPost()              |
| ------------------------ | --------------------- |
| Used for retrieving data | Used for sending data |
| Data visible in URL      | Data hidden in body   |
| Limited data size        | Large data allowed    |
| Less secure              | More secure           |
| Used for search pages    | Used for login forms  |


⭐ Example Difference

doGet()

public void doGet(HttpServletRequest req,
                  HttpServletResponse res)

doPost()

public void doPost(HttpServletRequest req,
                   HttpServletResponse res)


⭐ Simple Diagram

GenericServlet
        ↑
   HttpServlet
        ↑
   doGet() / doPost()


⭐ One-Line Exam Answer

GenericServlet is protocol-independent and overrides service(), while HttpServlet is HTTP-specific and 
overrides doGet() and doPost() methods.


🧠 Memory Trick

Generic → General
HTTP → Web

GET → Get data
POST → Send data
      
      `
    },
    {
      id: 15,
      question: "15. ⭐ 5️⃣ Explain Session Tracking Techniques in Servlets Cookies, Hidden Form Field, URL Rewriting, HttpSession ⭐⭐⭐",
      answer: "📌 MOST IMPORTANT TOPIC 🔥",
      codeExample: `
⭐ What is Session Tracking?

HTTP is a stateless protocol.

👉 That means server does NOT remember previous request.


So we use Session Tracking to:

    ✔ Maintain user data
    ✔ Remember login information
    ✔ Store user activity


⭐ 1️⃣ Cookies
🔹 Meaning

Cookies are small text files stored on client browser.
Server sends cookie → Browser stores it → Sends back with next request.

🔹 Example

Cookie ck = new Cookie("username", "Raj");
response.addCookie(ck);


To read cookie:

Cookie[] cookies = request.getCookies();


🔹 Advantages

✔ Simple
✔ Automatic sending

🔹 Disadvantages

❌ Stored on client
❌ Can be disabled



⭐ 2️⃣ Hidden Form Field
🔹 Meaning

Data is stored in hidden input field inside HTML form.

🔹 Example

<input type="hidden" name="username" value="Raj">


Retrieve in servlet:

String name = request.getParameter("username");


🔹 Advantages

✔ Easy to implement

🔹 Disadvantages

❌ Works only with forms
❌ Not secure



⭐ 3️⃣ URL Rewriting
🔹 Meaning

Session data is added to URL.


Example:

http://localhost:8080/app?username=Raj


🔹 Example

response.sendRedirect("welcome?username=Raj");


Get value:

String name = request.getParameter("username");


🔹 Advantages

✔ Works when cookies disabled

🔹 Disadvantages

❌ Data visible in URL
❌ Not secure



⭐ 4️⃣ HttpSession ⭐⭐⭐ (Most Important)
🔹 Meaning

HttpSession stores data on server side.
Best and most secure method.


🔹 Example

Create session:

HttpSession session = request.getSession();
session.setAttribute("username", "Raj");


Get session value:

String name = (String) session.getAttribute("username");


Destroy session:

session.invalidate();


🔹 Advantages

✔ Secure
✔ Stored on server
✔ Can store objects

🔹 Disadvantages

❌ Uses server memory


⭐ Comparison Table

| Technique     | Stored At | Secure | Used For              |
| ------------- | --------- | ------ | --------------------- |
| Cookies       | Client    | Medium | Login                 |
| Hidden Field  | Client    | Low    | Form data             |
| URL Rewriting | URL       | Low    | When cookies disabled |
| HttpSession   | Server    | High   | Login, Shopping cart  |



⭐ Simple Diagram

Client ↔ Server
   |
Cookies / URL / Hidden Field
   |
HttpSession (Server Side Storage)


⭐ One-Line Exam Answer

Session tracking techniques are used to maintain user data across multiple requests in a web application.

🧠 Memory Trick

CHUH

C → Cookies
H → Hidden Field
U → URL Rewriting
H → HttpSession


--------------------------------------------------------


⭐ 1️⃣ Cookies – Full Example

👉 First Servlet (Create Cookie)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieServlet1 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Create Cookie
        Cookie ck = new Cookie("username", "Raj");
        response.addCookie(ck);

        out.println("Cookie Created");
        out.println("<a href='cookie2'>Go to Next</a>");
    }
}

👉 Second Servlet (Read Cookie)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieServlet2 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        PrintWriter out = response.getWriter();

        Cookie[] cookies = request.getCookies();

        for (Cookie c : cookies) {
            if (c.getName().equals("username")) {
                out.println("Welcome " + c.getValue());
            }
        }
    }
}



⭐ 2️⃣ Hidden Form Field – Full Example

👉 HTML Page

<form action="hiddenServlet" method="get">
    <input type="hidden" name="username" value="Raj">
    <input type="submit" value="Submit">
</form>

👉 Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HiddenServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        String name = request.getParameter("username");

        PrintWriter out = response.getWriter();
        out.println("Welcome " + name);
    }
}



⭐ 3️⃣ URL Rewriting – Full Example

👉 First Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class URLServlet1 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        PrintWriter out = response.getWriter();

        out.println("<a href='url2?username=Raj'>Click Here</a>");
    }
}

👉 Second Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class URLServlet2 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        String name = request.getParameter("username");

        PrintWriter out = response.getWriter();
        out.println("Welcome " + name);
    }
}



⭐ 4️⃣ HttpSession – Full Example ⭐⭐⭐

👉 First Servlet (Create Session)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionServlet1 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        HttpSession session = request.getSession();

        session.setAttribute("username", "Raj");

        PrintWriter out = response.getWriter();
        out.println("Session Created");
        out.println("<a href='session2'>Next</a>");
    }
}

👉 Second Servlet (Get Session Data)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionServlet2 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        HttpSession session = request.getSession(false);

        PrintWriter out = response.getWriter();

        if (session != null) {
            String name = (String) session.getAttribute("username");
            out.println("Welcome " + name);
        } else {
            out.println("No Session Found");
        }
    }
}


⭐ Which One is Best?

✔ Cookies → Simple
✔ Hidden Field → Only forms
✔ URL Rewriting → When cookies disabled
✔ HttpSession → ⭐ Most Secure & Recommended


⭐ Viva Important Line

HttpSession is the most commonly used session tracking technique because it stores data on the server 
side.
      `
    },
    {
      id: 16,
      question: "16. ⭐ 6️⃣ Explain RequestDispatcher and sendRedirect() or 👉 Difference between forward() and sendRedirect()",
      answer: "",
      codeExample: `
⭐ 1️⃣ RequestDispatcher
🔹 Meaning

RequestDispatcher is used to:

    👉 Forward request from one resource to another (Servlet/JSP/HTML)
    👉 Include another resource’s output

📌 It works on server side


🔹 Methods

forward()
include()


🔹 Example of forward()

First Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FirstServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws ServletException, IOException {

        request.setAttribute("name", "Raj");

        RequestDispatcher rd =
            request.getRequestDispatcher("second");

        rd.forward(request, response);
    }
}


Second Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SecondServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        String name = (String) request.getAttribute("name");

        PrintWriter out = response.getWriter();
        out.println("Welcome " + name);
    }
}




⭐ 2️⃣ sendRedirect()
🔹 Meaning

sendRedirect() is used to:

    👉 Redirect client to another resource

📌 It works on client side


🔹 Example

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RedirectServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        response.sendRedirect("https://www.google.com");
    }
}


⭐ Difference Between forward() and sendRedirect() ⭐⭐

| forward()             | sendRedirect()           |
| --------------------- | ------------------------ |
| Server side           | Client side              |
| Same request object   | New request object       |
| URL does not change   | URL changes              |
| Faster                | Slower                   |
| Can pass request data | Cannot pass request data |


⭐ Diagram Difference

forward()

Client → Servlet1 → Servlet2
           (same request)

URL stays same.


sendRedirect()

Client → Servlet1 → Client → Servlet2

Browser makes new request.
URL changes.



⭐ Very Important Viva Points

✔ forward() keeps request data
✔ sendRedirect() creates new request
✔ forward() is faster


⭐ One-Line Exam Answer

RequestDispatcher forward() transfers control on the server side without changing URL, while 
sendRedirect() redirects the client to a new URL and creates a new request.

🧠 Memory Trick

F → Fast → Forward
R → Reload → Redirect
      
      `
    },
    {
      id: 17,
      question: "17. Explain Servlet Filter & Filter API Filter, FilterChain, FilterConfig, Mapping",
      answer: "📌 New concept → high chance in exam",
      codeExample: `
🔵 What is Filter? (Very Simple)

Imagine 👇

You enter a college gate.
Before going inside:

    👉 Security checks your ID card.

That security = Filter
Classroom = Servlet

So,

👉 Filter checks request
👉 Then allows it to go to servlet


🔵 Simple Flow

Client → Filter → Servlet → Filter → Client

Filter works:

    Before servlet
    After servlet


⭐ Why Use Filter?

✔ Authentication
✔ Logging
✔ Data validation
✔ Compression
✔ Encryption



⭐ Filter API Components

Filter API is in package:

    javax.servlet

Main components:

1️⃣ Filter
2️⃣ FilterChain
3️⃣ FilterConfig
4️⃣ Filter Mapping
    


⭐ 1️⃣ Filter Interface

You must implement:

init()
doFilter()
destroy()


Example Filter:

import java.io.*;
import javax.servlet.*;

public class MyFilter implements Filter {

    public void init(FilterConfig config) {
        System.out.println("Filter initialized");
    }

    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        System.out.println("Request received");

        // Pass request to next resource
        chain.doFilter(request, response);

        System.out.println("Response sent");
    }

    public void destroy() {
        System.out.println("Filter destroyed");
    }
}



⭐ 2️⃣ FilterChain
🔹 Meaning

FilterChain is used to:

👉 Pass request to next filter or servlet

Without this line:

    chain.doFilter(request, response);

Request will NOT reach servlet.



⭐ 3️⃣ What is FilterConfig? (Very Simple)

Think like this:

👉 When filter starts, it may need some initial values
Example:

    Admin name
    Password
    Message
    Any configuration value

These values are written in web.xml
FilterConfig helps to read those values.

⭐ Real Example (Step by Step)

🔹 Step 1: Write Filter with init()

import java.io.*;
import javax.servlet.*;

public class MyFilter implements Filter {

    FilterConfig config;

    // init() runs only once
    public void init(FilterConfig config) {
        this.config = config;   // store config object
    }

    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        PrintWriter out = response.getWriter();

        // Get value from web.xml
        String admin = config.getInitParameter("adminName");

        out.println("Admin Name from web.xml: " + admin);

        chain.doFilter(request, response);
    }

    public void destroy() {}
}


🔹 Step 2: Add Initialization Parameter in web.xml

<filter>
    <filter-name>MyFilter</filter-name>
    <filter-class>MyFilter</filter-class>

    <!-- Initialization Parameter -->
    <init-param>
        <param-name>adminName</param-name>
        <param-value>Raj</param-value>
    </init-param>

</filter>


🔹 What Happens?

1️⃣ Server starts filter
2️⃣ init() runs
3️⃣ FilterConfig gets value from web.xml
4️⃣ doFilter() prints:

Admin Name from web.xml: Raj



⭐ 4️⃣ What is Filter Mapping?

Now very important part 👇

Filter mapping tells:

    👉 On which URL or servlet this filter should work
    Without mapping → Filter will NOT run.


⭐ Example of Filter Mapping

<filter-mapping>
    <filter-name>MyFilter</filter-name>
    <url-pattern>/hello</url-pattern>
</filter-mapping>


This means:

Filter runs only when user accesses:

http://localhost:8080/app/hello


⭐ If We Write

    <url-pattern>/*</url-pattern>

It means:

✔ Filter runs for ALL requests
✔ Every servlet
✔ Every JSP


⭐ Simple Diagram

    Client → Filter (MyFilter) → HelloServlet

Only if mapping matches.


⭐ Real-Life Example

Imagine filter is:

🔒 Security Guard

Mapping is:

📍 Which door he should stand at

If door = /*
→ Guard checks everyone

If door = /admin
→ Guard checks only admin page


⭐ Quick Summary

| Topic          | Meaning                            |
| -------------- | ---------------------------------- |
| FilterConfig   | Reads init parameters from web.xml |
| Filter Mapping | Decides where filter will apply    |


⭐ One-Line Exam Answer

FilterConfig is used to get initialization parameters of filter from web.xml, and filter mapping is used to 
define the URL pattern where filter should be applied.


🧠 Memory Trick

F C C M

Filter
Chain
Config
Mapping
`
    },
    {
      id: 18,
      question: "18. 🧠 2 MARK / MCQ – JUST READ",
      answer: "",
      codeExample: `
Default HTTP port → 80
Servlet is managed by → Servlet Container
Web server example → Apache Tomcat
Application server → JBoss, GlassFish
Session id created by → Container
doGet() → URL data
doPost() → Form body data
      `
    },
    {
      id: 21,
      question: "21. Explain JSP Architecture and Working.",
      answer: "📌 Very common theory question.",
      codeExample: `
⭐ 1️⃣ What is JSP?

First think about this question:

When we make a website page like:

    <h1>Welcome Raj</h1>

This is HTML (static).


But sometimes we want dynamic data like:

    user name
    date
    database data

So we use JSP (Java Server Pages).

👉 JSP is a technology used to create dynamic web pages using Java.

It allows us to write:

    HTML
    Java code

inside the same page.


Example JSP:

<html>
<body>

<%
out.println("Hello JSP");
%>

</body>
</html>

📌 JSP runs on the server, not in the browser.



⭐ 2️⃣ JSP Architecture (How JSP Works)

Before I explain, look at this flow carefully.

Client (Browser)
       |
       v
   Web Server
       |
       v
 Servlet Container (Tomcat)
       |
       v
      JSP
       |
       v
   Converted to Servlet
       |
       v
  Compiled Java Class
       |
       v
   Response to Client


📌 Important idea:

JSP is internally converted into a Servlet.



⭐ 3️⃣ JSP Working Process (Step by Step)

Let’s go step by step.


Step 1 – Client Request

User opens page:

http://localhost:8080/app/index.jsp

Browser sends request to web server.


Step 2 – Request goes to Servlet Container

The server forwards request to Servlet Container (Tomcat).


Step 3 – JSP is converted to Servlet

If JSP is accessed first time:
JSP file → Converted into Servlet (.java file)

Example:
index.jsp → index_jsp.java


Step 4 – Servlet is compiled

Servlet container compiles it:
index_jsp.java → index_jsp.class


Step 5 – Servlet executes

The servlet executes and generates HTML response.


Step 6 – Response sent to Browser

Finally browser receives output.



⭐ JSP Working Diagram (Important for Exam)

Browser
   |
   v
Web Server
   |
   v
Servlet Container
   |
   v
JSP Page
   |
   v
Converted to Servlet
   |
   v
Compiled Class
   |
   v
Response to Browser



⭐ 4️⃣ Advantages of JSP over Servlets

Now think:

Servlet → mostly Java code
JSP → mostly HTML + small Java
So JSP is easier for web pages.

| JSP                  | Servlet                |
| -------------------- | ---------------------- |
| Easy to write HTML   | HTML writing difficult |
| Less Java code       | More Java code         |
| Faster development   | Slower development     |
| Better for UI design | Better for logic       |


⭐ Simple Example

JSP Page

<html>
<body>

<h2>Welcome to JSP</h2>

<%
String name = "Raj";
out.println("Hello " + name);
%>

</body>
</html>

Output:

Welcome to JSP
Hello Raj


⭐ One-Line Exam Answer

JSP is a server-side technology used to create dynamic web pages. A JSP page is converted into a servlet 
by the servlet container and executed to generate the response.
      
      `
    },
    {
      id: 22,
      question: "22. Explain JSP Life Cycle with diagram.",
      answer: "📌 Very important exam question.",
      codeExample: `
➡ JSP is converted into a Servlet by the servlet container (Tomcat).

So the JSP life cycle is very similar to the Servlet life cycle.

Let’s go step by step.


⭐ JSP Life Cycle

The JSP Life Cycle describes how a JSP page is:

1️⃣ Converted to servlet
2️⃣ Compiled
3️⃣ Loaded
4️⃣ Executed
5️⃣ Destroyed

The servlet container manages all these steps.


⭐ JSP Life Cycle Diagram (Important for Exam)

JSP Page
   |
   v
Translation
(JSP → Servlet)
   |
   v
Compilation
(Servlet → .class)
   |
   v
Class Loading
   |
   v
Instantiation
   |
   v
jspInit()
   |
   v
_jspService()
   |
   v
jspDestroy()


⭐ Step 1️⃣ JSP Translation

When a JSP page runs for the first time, the container converts it into a Servlet (.java file).

Example:

    index.jsp → index_jsp.java

This process is called Translation.


⭐ Step 2️⃣ Compilation

Now the generated servlet file is compiled.

    index_jsp.java → index_jsp.class

This is normal Java compilation.


⭐ Step 3️⃣ Class Loading

The servlet container loads the compiled .class file into memory.
Now the JSP servlet is ready to run.


⭐ Step 4️⃣ Instantiation

The container creates an object of the JSP servlet class.

Example idea:

    new index_jsp();

Now the JSP object exists in memory.


⭐ Step 5️⃣ Initialization – jspInit()

After object creation, the container calls:

    jspInit()

Purpose:

✔ Initialize resources
✔ Database connection
✔ Configuration setup

Important point:

    📌 This method runs only once.

Example:

<%! 
public void jspInit(){
    System.out.println("JSP Initialized");
}
%>


⭐ Step 6️⃣ Request Processing – _jspService()

This method processes every client request.

Example:

    _jspService(request, response)

Important points:

✔ Runs for every request
✔ Generates response
✔ Cannot be overridden by user


⭐ Step 7️⃣ Destruction – jspDestroy()

When the server stops or JSP is removed, the container calls:

    jspDestroy()

Purpose:

✔ Release resources
✔ Close connections

Example:

<%! 
public void jspDestroy(){
    System.out.println("JSP Destroyed");
}
%>


⭐ Summary Table

| Step          | Description              |
| ------------- | ------------------------ |
| Translation   | JSP → Servlet            |
| Compilation   | Servlet → Class file     |
| Class Loading | Class loaded into memory |
| Instantiation | Object created           |
| jspInit()     | Initialization           |
| _jspService() | Handles requests         |
| jspDestroy()  | Cleanup                  |


⭐ One-Line Exam Answer

JSP life cycle includes translation, compilation, class loading, instantiation, initialization (jspInit), request 
processing (_jspService), and destruction (jspDestroy).




----------------------------------------------------------------

Example:


<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%!
/* Initialization method - runs only once when JSP loads */
public void jspInit(){
    System.out.println("JSP Initialized");
}

/* Destruction method - runs when server stops or JSP is unloaded */
public void jspDestroy(){
    System.out.println("JSP Destroyed");
}
%>

<!DOCTYPE html>
<html>
<head>
    <title>JSP Life Cycle Example</title>
</head>
<body>

<h2>JSP Life Cycle Demonstration</h2>

<%
    // This code runs inside _jspService() method automatically
    out.println("This content is generated from _jspService() method.<br>");
    out.println("Current Time: " + new java.util.Date());
%>

</body>
</html>
      `
    },
    {
      id: 23,
      question: "23. Explain JSP Scripting Elements.",
      answer: "Often asked in exam.",
      codeExample: `
⭐ JSP Scripting Elements

In JSP we sometimes need to write Java code inside HTML page.
The special tags used to write Java code in JSP are called Scripting Elements.

There are 3 types:

1️⃣ Scriptlet
2️⃣ Expression
3️⃣ Declaration



⭐ 1️⃣ Scriptlet <% %>

First think:
Where do we normally write Java statements like loops or variables?

👉 That is done using Scriptlet.

Syntax
<% Java code %>


Example

<html>
<body>

<%
int a = 10;
int b = 20;
out.println("Sum = " + (a+b));
%>

</body>
</html>


Output:

Sum = 30


📌 Scriptlet is used to write Java logic (statements).

Examples:

loops
conditions
variable creation



⭐ 2️⃣ Expression <%= %>

Now imagine you just want to display a value on the webpage.

Instead of writing:

    out.println(value);

JSP provides Expression.

Syntax
<%= expression %>

Example
<html>
<body>

Current Time: <%= new java.util.Date() %>

</body>
</html>


Output example:

Current Time: Tue Mar 12 22:30:10 IST 2026


📌 Expression automatically prints value.

So internally JSP converts:

<%= value %>

into

out.println(value);



⭐ 3️⃣ Declaration <%! %>

Declaration is used to declare variables or methods.
These become class-level variables in the generated servlet.

Syntax
<%! declaration %>

Example
<%!
int count = 0;

public int add(int a, int b){
    return a + b;
}
%>

Result = <%= add(5,3) %>


Output:

Result = 8


📌 Declaration is used for:

variables
methods
class level code


⭐ Simple Comparison

| Element            | Purpose                   |
| -------------------| ------------------------- |
| Scriptlet <% %>    | Write Java statements     |
| Expression <%= %>  | Print output              |
| Declaration <%! %> | Declare variables/methods |


⭐ Easy Diagram
JSP Page
   |
   |-- Scriptlet <% %> → Java Logic
   |-- Expression <%= %> → Display Value
   |-- Declaration <%! %> → Variables/Methods


⭐ One-Line Exam Answer

JSP scripting elements are used to embed Java code inside JSP pages. The three types are Scriptlet, 
Expression, and Declaration.
      
      `
    },
    {
      id: 24,
      question: "24. Explain JSP Implicit Objects.",
      answer: "📌 Very important long answer.",
      codeExample: `
⭐ JSP Implicit Objects

First understand the idea.
In JSP, some objects are automatically created by the JSP container.
You do NOT need to declare them.
These ready-to-use objects are called Implicit Objects.

📌 Total JSP implicit objects = 9


But for exam, the important ones are:

request
response
session
application
out
config
pageContext
page
exception



⭐ 1️⃣ request Object
Meaning

request object stores client request information.

Example:

form data
user input
parameters

Example
<%
String name = request.getParameter("username");
out.println("Welcome " + name);
%>

📌 Used for:

getting form values
client request information



⭐ 2️⃣ response Object
Meaning

response object is used to send response to the client (browser).

Example:

redirect page
send output

Example
<%
response.sendRedirect("home.jsp");
%>

📌 Used for:

redirecting pages
sending response to browser



⭐ 3️⃣ session Object
Meaning

session object stores user data during session.


Example:

login information
user id

Example
<%
session.setAttribute("user","Raj");
%>


Retrieve value:

<%
String user = (String)session.getAttribute("user");
%>

📌 Used for:

login sessions
storing user data



⭐ 4️⃣ application Object
Meaning

application object stores data shared by all users.
It represents ServletContext.

Example
<%
application.setAttribute("count",100);
%>

📌 Used for:

global application data



⭐ 5️⃣ out Object
Meaning

out is used to send output to browser.

It is similar to:

    System.out.println()

but prints to webpage.

Example
<%
out.println("Hello JSP");
%>



⭐ 6️⃣ config Object
Meaning

config object is used to get servlet configuration information.

Example
<%
String value = config.getServletName();
out.println(value);
%>

📌 Used to access init parameters.



⭐ 7️⃣ pageContext Object
Meaning

pageContext is used to access all JSP objects.
It manages page scope data.

Example
<%
pageContext.setAttribute("msg","Hello");
%>

📌 Used to:

manage page attributes
access other implicit objects



⭐ 8️⃣ page Object
Meaning

page object represents current JSP page instance.

It is similar to:

    this

in Java.

Example:
<%
out.println(page);
%>



⭐ 9️⃣ exception Object
Meaning

exception object is used only in error pages.
It stores error information.

Example:

<%= exception.getMessage() %>

Used in:

<%@ page isErrorPage="true" %>



⭐ Easy Diagram

Client (Browser)
       |
       v
   JSP Page
       |
--------------------------------
| request   → client data       |
| response  → send response     |
| session   → user session      |
| application → global data     |
| out       → print output      |
| config    → servlet config    |
| pageContext → page control    |
| page      → current page      |
| exception → error info        |
--------------------------------


⭐ One-Line Exam Definition

JSP implicit objects are automatically created objects provided by the JSP container that can be used 
directly in JSP pages without declaration.
      
      `
    },
    {
      id: 25,
      question: "25. Explain JavaBeans in JSP.",
      answer: "📌 High chance question.",
      codeExample: `
⭐ 1️⃣ What is JavaBean (Very Simple)

JavaBean is just a normal Java class used to store data.

Example: storing

student name
marks
age


But the rule is:

variables private
use getter and setter methods



⭐ 2️⃣ JavaBean Class (Student.java)

This file is created inside Java classes folder.

public class Student {

    private String name;   // variable
    private int marks;     // variable

    // setter method
    public void setName(String name){
        this.name = name;
    }

    // getter method
    public String getName(){
        return name;
    }

    // setter
    public void setMarks(int marks){
        this.marks = marks;
    }

    // getter
    public int getMarks(){
        return marks;
    }
}

Now this class only stores values.
But JSP will use this class.



⭐ 3️⃣ JSP Page Using JavaBean

Now JSP creates object of the class.

Step 1 — Create Bean Object

<jsp:useBean id="s" class="Student"/>

Meaning:
create object s of class Student

Same as Java:
Student s = new Student();


⭐ 4️⃣ Setting Values (Setter)

Now JSP sets values inside object.

<jsp:setProperty name="s" property="name" value="Raj"/>
<jsp:setProperty name="s" property="marks" value="90"/>

Internally JSP converts it to Java:

    s.setName("Raj");
    s.setMarks(90);

So values stored in object.



⭐ 5️⃣ Getting Values (Getter)

Now we print the values.

Name : <jsp:getProperty name="s" property="name"/>
Marks : <jsp:getProperty name="s" property="marks"/>


Internally JSP converts to:

s.getName();
s.getMarks();


⭐ Full JSP Example

<jsp:useBean id="s" class="Student"/>

<jsp:setProperty name="s" property="name" value="Raj"/>
<jsp:setProperty name="s" property="marks" value="90"/>

Name : <jsp:getProperty name="s" property="name"/>

Marks : <jsp:getProperty name="s" property="marks"/>


Output

Name : Raj
Marks : 90



⭐ Simple Flow Diagram

JSP Page
   |
   | create object
   v
Student Bean Object
   |
   | set values
   v
setName("Raj")
setMarks(90)
   |
   | get values
   v
getName()
getMarks()
   |
   v
Display on webpage



⭐ Easy Trick to Remember

set = store value
get = read value

Example:

setName("Raj")   → store name
getName()        → read name



⭐ Real Life Example

Think JavaBean like Student Form.

Name field → setName()
Marks field → setMarks()

Show result → getName()
Show marks → getMarks()


Now I want to check one thing (very important):

If variable is

    private int age;
      

--------------------------------------------------------------------------


1️⃣ Look carefully at this line

<jsp:setProperty name="s" property="name" value="Raj"/>


Focus on this part:

    property="name"


This tells JSP:

👉 Use the variable called name


So JSP searches in the JavaBean:

    set + Name

So it calls:

    setName("Raj")


2️⃣ If you write property="marks"

Example:

    <jsp:setProperty name="s" property="marks" value="90"/>

Now JSP sees:

    property="marks"


So JSP searches:

    setMarks()


and internally it calls:

s.setMarks(90);


3️⃣ Simple Rule

JSP always uses:

property name = variable name

Then it creates method name automatically.

property="name"  → setName()
property="marks" → setMarks()
property="age"   → setAge()


4️⃣ Visual Flow
property="name"
      ↓
variable = name
      ↓
method = setName()


Another example:

property="marks"
      ↓
variable = marks
      ↓
method = setMarks()


5️⃣ Example JavaBean

private String name;
private int marks;

Methods:

setName()
getName()

setMarks()
getMarks()

JSP matches property name with variable name.


6️⃣ Very Simple Example

JSP Code

<jsp:setProperty name="s" property="name" value="Raj"/>
<jsp:setProperty name="s" property="marks" value="90"/>

Internally becomes:

s.setName("Raj");
s.setMarks(90);
      `
    },
    {
      id: 26,
      question: "26. Explain JSP Action Tags.",
      answer: "📌 Often asked with example.",
      codeExample: `
First quick reminder:

➡ JavaBean = class that stores data
➡ JSP Action Tags = tags used to work with that JavaBean

Now let’s learn the three important JSP Action Tags.


⭐ JSP Action Tags

JSP Action Tags are special tags used to perform actions inside JSP pages.
They are written in XML style and executed by the JSP container.

Example:

    <jsp:actionName />

Important action tags for exam:

<jsp:useBean>
<jsp:setProperty>
<jsp:getProperty>


⭐ 1️⃣ <jsp:useBean>
Meaning

This tag is used to create or locate a JavaBean object.
It creates an object of a Java class.

Syntax
    <jsp:useBean id="objectName" class="ClassName"/>

Example
    <jsp:useBean id="s" class="Student"/>

Meaning (internally):

    Student s = new Student();

So now JSP can use object s.


⭐ 2️⃣ <jsp:setProperty>
Meaning

This tag is used to set value of a bean property.
It calls the setter method of the JavaBean.

Syntax
    <jsp:setProperty name="beanName" property="variable" value="value"/>

Example
    <jsp:setProperty name="s" property="name" value="Raj"/>

Internally JSP calls:

    s.setName("Raj");

So the value Raj is stored in the bean.


⭐ 3️⃣ <jsp:getProperty>
Meaning

This tag is used to display the value of a bean property.
It calls the getter method.

Syntax

    <jsp:getProperty name="beanName" property="variable"/>

Example

    Name : <jsp:getProperty name="s" property="name"/>

Internally JSP calls:

    s.getName();

So it prints the value stored earlier.



⭐ Full Example (Very Important)

JavaBean Class

public class Student {

    private String name;

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }
}


JSP Page

<jsp:useBean id="s" class="Student"/>
<jsp:setProperty name="s" property="name" value="Raj"/>
Name : <jsp:getProperty name="s" property="name"/>


Output:

Name : Raj


⭐ Simple Diagram

JSP Page
   |
   | useBean
   v
Create Object (Student s)
   |
   | setProperty
   v
s.setName("Raj")
   |
   | getProperty
   v
s.getName()
   |
   v
Display on webpage


⭐ Easy Comparison

| Tag               | Purpose                |
| ------------------| ---------------------- |
| <jsp:useBean>     | Create JavaBean object |
| <jsp:setProperty> | Set value in bean      |
| <jsp:getProperty> | Get value from bean    |



⭐ One-Line Exam Answer

JSP Action Tags are used to perform actions such as creating JavaBean objects and setting or retrieving 
their properties.
      
      `
    },
    {
      id: 27,
      question: "27. Explain Expression Language (EL) in JSP.",
      answer: "",
      codeExample: `
Note: if you see like this $ {text}
this means $ is join with {text} ok in this website is not supported to i wirte like this ok.


First small idea:

Earlier in JSP we printed values like this:

    <%= name %>

But JSP introduced Expression Language (EL) to make this simpler.



⭐ Expression Language (EL) in JSP

1️⃣ Definition

Expression Language (EL) is used to access and display data in JSP pages easily without writing Java code.

It allows us to read values from:

JavaBeans
request
session
application


📌 In simple words:

EL is a simple way to display data in JSP.



⭐ 2️⃣ EL Syntax

EL expressions are written inside:

$ {expression}


Example:

$ {name}


This means:

print value of name


So instead of writing:

<%= name %>


we write:

$ {name}



⭐ 3️⃣ Accessing Bean Properties

Suppose we have a JavaBean Student.

private String name;
private int marks;

Getter methods:

getName()
getMarks()


JSP Using EL

$ {student.name}
$ {student.marks}

EL automatically calls:

student.getName()
student.getMarks()

So EL makes code short and clean.



⭐ Example

⭐ Step 1 — Create JavaBean Class

File name: Student.java

public class Student {

    private String name;
    private int marks;

    // Setter for name
    public void setName(String name){
        this.name = name;
    }

    // Getter for name
    public String getName(){
        return name;
    }

    // Setter for marks
    public void setMarks(int marks){
        this.marks = marks;
    }

    // Getter for marks
    public int getMarks(){
        return marks;
    }
}

📌 This class only stores data.


⭐ Step 2 — JSP Page

File name: index.jsp

<%@ page language="java" %>

<html>
<body>

<h2>Student Information</h2>

<!-- Create Bean Object -->
<jsp:useBean id="student" class="Student"/>

<!-- Set Values -->
<jsp:setProperty name="student" property="name" value="Raj"/>
<jsp:setProperty name="student" property="marks" value="90"/>

<!-- Access Using EL -->
Name : $ {student.name} <br>
Marks : $ {student.marks}

</body>
</html>


⭐ Final Output

Student Information

Name : Raj
Marks : 90


⭐ 4️⃣ Accessing Scope Variables

JSP has different scopes where data can be stored.

Scopes:

pageScope
requestScope
sessionScope
applicationScope

EL can access these values.


Example 1 — Request Scope

    $ {requestScope.username}

Means:

    request.getAttribute("username")


Example 2 — Session Scope

    $ {sessionScope.user}

Means:

    session.getAttribute("user")


Example 3 — Application Scope

    $ {applicationScope.count}

Means:

    application.getAttribute("count")


⭐ Simple Diagram

JSP Page
   |
   |  $ {expression}
   v
Expression Language
   |
   | access data from
   v
--------------------------
JavaBean properties
Request variables
Session variables
Application variables
--------------------------


⭐ Advantages of EL

1️⃣ No Java code needed in JSP
2️⃣ Easy to read
3️⃣ Short syntax
4️⃣ Access multiple scopes easily


⭐ One-Line Exam Answer

Expression Language (EL) in JSP is used to access and display data from JavaBeans and different scopes 
using the syntax $ {expression}.
      

-----------------------------------------------------------------------------


1️⃣ Servlet (Set Variables in Different Scopes)

File: ScopeServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ScopeServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Request Scope
        request.setAttribute("username", "Raj");

        // Session Scope
        HttpSession session = request.getSession();
        session.setAttribute("user", "Raj Session");

        // Application Scope
        ServletContext application = getServletContext();
        application.setAttribute("count", 10);

        // Forward to JSP page
        RequestDispatcher rd = request.getRequestDispatcher("scope.jsp");
        rd.forward(request, response);
    }
}


Explanation:

request.setAttribute() → requestScope
session.setAttribute() → sessionScope
application.setAttribute() → applicationScope



2️⃣ JSP Page (Access Scope Variables)

File: scope.jsp

<%@ page language="java" contentType="text/html" pageEncoding="UTF-8"%>

<%
    // Page Scope
    pageContext.setAttribute("pageName", "This is Page Scope");
%>

<html>
<head>
<title>Scope Example</title>
</head>

<body>

<h2>JSP Scope Example</h2>

<h3>Page Scope</h3>
$ {pageScope.pageName}

<br><br>

<h3>Request Scope</h3>
$ {requestScope.username}

<br><br>

<h3>Session Scope</h3>
$ {sessionScope.user}

<br><br>

<h3>Application Scope</h3>
$ {applicationScope.count}

</body>
</html>


3️⃣ Output in Browser

When you open the servlet, the page will show:

JSP Scope Example

Page Scope
This is Page Scope

Request Scope
Raj

Session Scope
Raj Session

Application Scope
10



what is application scop


⭐ Application Scope in JSP

Application Scope means a variable that is shared across the entire web application.
This data is available to all users, all pages, and all servlets in the application.
It is stored in the ServletContext object.
      

🔹 Lifetime

Starts when the web application starts (server starts)
Ends when the server stops or application is restarted

So the data stays for the whole application life.


🔹 Example (Setting Value)

In Servlet or JSP:

    application.setAttribute("count", 100);

This stores the value 100 in application scope.



🔹 Access in JSP using EL
$ {applicationScope.count}

Meaning in Java:

application.getAttribute("count");



🔹 Simple Real-Life Example

Suppose a website tracks total visitors.

When someone visits:

int count = (Integer)application.getAttribute("count");
count++;
application.setAttribute("count", count);

Now every user sees the same visitor count because it is stored in application scope.


🔹 Example JSP

<%
application.setAttribute("siteName", "My Website");
%>

Site Name: $ {applicationScope.siteName}


Output:

Site Name: My Website




🔹 Easy Way to Remember

Page Scope → Only one page
Request Scope → One request
Session Scope → One user session
Application Scope → Whole website
`
    },
    {
      id: 28,
      question: "28. Page scop.",
      answer: "",
      codeExample: `
⭐ Page Scope

Page Scope means the variable is available only inside one JSP page.
Other pages cannot use it.
When the page finishes loading, the data is removed.

Example:

pageContext.setAttribute("name","Raj");

Access:

$ {pageScope.name}

👉 Simple idea:
Only one page can see the data.



⭐ Request Scope

Request Scope means the variable is available during one request.
If a Servlet sends data to a JSP, the JSP can read it.
After the response is sent to the browser, the data is destroyed.

Example:

request.setAttribute("username","Raj");

Access:

$ {requestScope.username}

👉 Simple idea:
Data lives only for one request.

Example flow:

Servlet → JSP



⭐ Session Scope

Session Scope means the variable is available for one user during their session.

The data stays until:

the user logs out
the session expires
the browser closes

Example:

session.setAttribute("user","Raj");

Access:

$ {sessionScope.user}

👉 Simple idea:
Data stays for one user while they are using the website.

Example:
Logged-in user information.
      
      `
    },
    {
      id: 29,
      question: "29. JSTL (Java Standard Tag Library)",
      answer: "",
      codeExample: `
⭐ JSTL (Java Standard Tag Library)
1️⃣ Definition

JSTL is a library of ready-made JSP tags used to perform common tasks like:

loops
conditions
printing values
working with XML
formatting data

📌 In simple words:

JSTL provides tags to replace Java code in JSP.


⭐ Why JSTL is Used

Without JSTL:

<%
if(marks > 40){
    out.println("Pass");
}
%>

With JSTL:

<c:if test="$ {marks > 40}">
Pass
</c:if>

Much cleaner and easier.


⭐ JSTL Tag Libraries

JSTL provides different tag libraries.

| Library    | Purpose             |
| ---------- | ------------------- |
| Core       | Basic operations    |
| Formatting | Date and numbers    |
| SQL        | Database operations |
| XML        | XML processing      |
| Functions  | String functions    |

Most commonly used: Core Library


⭐ Core JSTL Tags (Important)

1️⃣ <c:out>

Used to print value.

Example:

<c:out value="$ {name}" />

Output:

Raj



2️⃣ <c:set>

Used to store value in variable.

Example:

<c:set var="marks" value="85"/>



3️⃣ <c:if>

Used for condition checking.

Example:

<c:if test="$ {marks > 40}">
Pass
</c:if>



4️⃣ <c:forEach>

Used for looping.

Example:

<c:forEach var="i" begin="1" end="5">
$ {i} <br>
</c:forEach>

Output:

1
2
3
4
5


⭐ Example JSP Program

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<body>

<c:set var="name" value="Raj"/>

Name : <c:out value="$ {name}"/>

</body>
</html>


Output:

Name : Raj


⭐ Simple Diagram

JSP Page
   |
   v
 JSTL Library
   |
--------------------------------
| <c:out>     → print value     |
| <c:set>     → store value     |
| <c:if>      → condition       |
| <c:forEach> → loop            |
--------------------------------


⭐ Advantages of JSTL

1️⃣ Reduces Java code in JSP
2️⃣ Makes JSP cleaner
3️⃣ Easy to read
4️⃣ Improves maintainability


⭐ One-Line Exam Answer

JSTL (Java Standard Tag Library) is a collection of custom tags used in JSP to perform common tasks such 
as iteration, condition checking, and output formatting without using Java code.
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 11111,
      question: "Mid Paper",
      answer: "",
      codeExample: `
=========================================
ADVANCED JAVA PROGRAMMING - SOLVED PAPER
=========================================


-----------------------------------------
Q1 (a) (i)
Question: Define JDBC
-----------------------------------------

Answer:
JDBC (Java Database Connectivity) is an API
used to connect Java applications with databases
and execute SQL queries.


-----------------------------------------
Q1 (a) (ii)
Question: Purpose of HttpServletRequest
-----------------------------------------

Answer:
HttpServletRequest is used to get request
information from client such as parameters,
form data, headers, etc.


-----------------------------------------
Q1 (a) (iii)
Question: Any two implicit objects in JSP
-----------------------------------------

Answer:
1. request
2. response


-----------------------------------------
Q1 (b) MCQs
-----------------------------------------

1. Statement
2. False
3. Java Server Pages
4. DriverManager
5. out
6. getConnection()
7. init(), service(), destroy()



-----------------------------------------
Q2 (a) (i)
Question: Steps to establish JDBC connection
-----------------------------------------

Answer:

1. Load driver
   Class.forName("com.mysql.cj.jdbc.Driver");

2. Establish connection
   Connection con = DriverManager.getConnection(url, user, pass);

3. Create statement
   Statement stmt = con.createStatement();

4. Execute query
   stmt.executeQuery() / executeUpdate();

5. Close connection
   con.close();


-----------------------------------------
Q2 (a) (ii)
Question: Servlet Life Cycle
-----------------------------------------

Answer:

1. init() → Initialization
2. service() → Handles requests
3. destroy() → Cleanup resources


-----------------------------------------
Q2 (b) (i)
Question: Statement vs PreparedStatement
-----------------------------------------

Answer:

Statement:
- Used for simple queries
- Less secure
- No pre-compilation

PreparedStatement:
- Precompiled queries
- More secure (prevents SQL injection)
- Faster execution


-----------------------------------------
Q2 (b) (ii)
Question: JSP implicit objects with example
-----------------------------------------

Answer:

Example:

<%
String name = request.getParameter("name");
out.println("Welcome " + name);
%>

Implicit objects:
request, response, session, application, out



-----------------------------------------
Q3 (i)
Question: JDBC program to insert data
-----------------------------------------

Answer:

import java.sql.*;

class InsertDemo {
    public static void main(String[] args) throws Exception {

        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/db", "root", "1234");

        PreparedStatement ps = con.prepareStatement(
            "insert into student values(?, ?)");

        ps.setInt(1, 1);
        ps.setString(2, "Ram");

        ps.executeUpdate();

        con.close();
    }
}


-----------------------------------------
Q3 (ii)
Question: JDBC Architecture
-----------------------------------------

Answer:

Components:
1. Java Application
2. JDBC API
3. Driver Manager
4. JDBC Driver
5. Database

Flow:
Application → JDBC API → Driver → Database


-----------------------------------------
Q3 (iii)
Question: Servlet vs JSP
-----------------------------------------

Answer:

Servlet:
- Java code based
- Used for logic
- Hard to design UI

JSP:
- HTML + Java
- Used for presentation
- Easy to design UI



-----------------------------------------
Q4 (a)
Question: JDBC + Servlet Authentication
-----------------------------------------

Answer:

Steps:

1. User enters username/password in form
2. Servlet receives data using request
3. Connect database using JDBC
4. Check credentials using SQL query
5. If valid → show welcome message
6. Else → show error message


-----------------------------------------
Q4 (b)
Question: JSP Authentication Application
-----------------------------------------

Answer:

index.jsp

<form action="login.jsp">
Username: <input type="text" name="user">
<input type="submit">
</form>


login.jsp

<%
String user = request.getParameter("user");

if(user != null)
{
    out.println("Welcome " + user);
}
%


-----------------------------------------
OR
-----------------------------------------

Question: JSP personalized welcome message
-----------------------------------------

Answer:

index.jsp

<form action="welcome.jsp">
Enter Name: <input type="text" name="name">
<input type="submit">
</form>


welcome.jsp

<%
String name = request.getParameter("name");
out.println("Hello " + name + " Welcome!");
%>
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 31,
      question: "31. What is a Web Service? Explain its need & features.",
      answer: "📌 Basic + very common question",
      codeExample: `
⭐ What is a Web Service?

🔹 Definition  
A Web Service is a software system that allows different applications to communicate over the internet.  

📌 Simple Definition:  
A Web Service is a method of communication between two applications using web technologies.  


🔹 Example  
Mobile App → sends request → Web Service → Database → Response  

Examples:  
- Weather app calling a weather API  
- Payment system connecting to bank server  



⭐ Need of Web Service  

Why do we need Web Services?  

1️⃣ Communication between different systems  
→ Different applications can share data  

2️⃣ Platform independence  
→ Java app can communicate with Python / .NET app  

3️⃣ Reusability  
→ Same service can be used by multiple applications  

4️⃣ Remote access  
→ Applications can access services over the internet  



⭐ Key Features of Web Service  

🔹 1️⃣ Interoperability  

Meaning:  
Different systems (Java, Python, .NET) can work together  

📌 Example:  
Java application ↔ Python application  


🔹 2️⃣ XML-Based Communication  

Meaning:  
Web services use XML format to send and receive data  

📌 Example:  
<user>  
   <name>Raj</name>  
</user>  

XML is:  
- Simple  
- Platform-independent  


🔹 3️⃣ Loosely Coupled System  

Meaning:  
Applications are independent of each other  

📌 Simple Words:  
One system can change without affecting the other  

Example:  
Mobile app uses API  
Backend changes → App still works  


⭐ Simple Diagram  

Client (App)  
     |  
     v  
 Web Service  
     |  
     v  
 Server / Database  


⭐ One-Line Exam Answer  

A Web Service is a software system that enables communication between different applications over the 
internet using standard protocols like XML.
      
      `
    },
    {
      id: 32,
      question: "32. Explain Web Service Architecture.",
      answer: "📌 Very important long answer",
      codeExample: `
⭐ Web Service with Architecture

🔹 Definition (Quick)  
A Web Service is a system that allows different applications to communicate over the internet.  


⭐ Main Components of Web Service  

There are three main components:  

1️⃣ Service Provider  
2️⃣ Service Requestor  
3️⃣ Service Registry (UDDI)  


⭐ 1️⃣ Service Provider  

Meaning:  
The Service Provider is the system that creates and provides the web service.  

📌 It:  
- Develops the service  
- Publishes it  
- Handles requests  

Example:  
- Bank server providing payment service  
- Weather API providing weather data  


⭐ 2️⃣ Service Requestor  

Meaning:  
The Service Requestor is the client that uses the web service.  

📌 It:  
- Sends request  
- Receives response  

Example:  
- Mobile app requesting weather data  
- Website calling payment service  


⭐ 3️⃣ Service Registry (UDDI)  

Meaning:  
UDDI (Universal Description, Discovery, and Integration) is like a directory of web services.  

📌 It helps to:  
- Store service information  
- Allow clients to find services  

Example:  
Like a phone directory of web services  


⭐ Operations in Web Service  

There are three main operations:  


⭐ 1️⃣ Publish  
- Service Provider registers the service in UDDI  
- Makes service available  

Flow:  
Provider → UDDI  


⭐ 2️⃣ Find  
- Service Requestor searches for service in registry  

Flow:  
Requestor → UDDI  


⭐ 3️⃣ Bind  
- Requestor connects to provider and uses the service  

Flow:  
Requestor ↔ Provider  


⭐ Web Service Architecture (Perfect Diagram)

                (1) Publish
     ----------------------------------->
   Service Provider                 Service Registry (UDDI)
        |                                   |
        |                                   |
        |<----------------------------------|
                (2) Find

        |
        | (3) Bind / Invoke
        v
   Service Requestor  <-------------------->  Service Provider


⭐ Components Recap  

- Service Provider → Creates and provides service  
- Service Requestor → Uses the service  
- Service Registry (UDDI) → Stores service information  



⭐ How Web Service Works (Step-by-Step)  

🔹 Step 1 — Publish  
- Service Provider creates web service  
- Publishes details to registry (UDDI)  

Flow:  
Provider → Registry  

📌 Meaning: “My service is available”  


🔹 Step 2 — Find  
- Service Requestor searches for service in registry  

Flow:  
Requestor → Registry  

📌 Meaning: “Which service can I use?”  


🔹 Step 3 — Bind (Invoke)  
- Requestor connects to Provider  
- Sends request and receives response  

Flow:  
Requestor ↔ Provider  

📌 Meaning: “Use the service”  



⭐ Real-Life Example  

Example: Weather App  

Step 1 — Publish  
Weather company publishes API in registry  

Step 2 — Find  
Mobile app searches for weather service  

Step 3 — Bind  
App calls API → gets weather data  


⭐ Simple Flow Summary  

1️⃣ Publish → Service available  
2️⃣ Find → Service discovered  
3️⃣ Bind → Service used  


⭐ One-Line Exam Answer  

In Web Service architecture, the provider publishes the service to the registry, the requestor finds it, and 
then binds to use the service.  

      `
    },
    {
      id: 33,
      question: "33. Explain Web Service Protocol Stack.",
      answer: "📌 Frequently asked question",
      codeExample: `
⭐ Web Service Protocol Stack

🔹 Definition  
Web Service Protocol Stack is a set of layers (protocols) used for communication between applications 
over the web.  

📌 Each layer has a specific role.  


⭐ Layers of Protocol Stack  

There are 4 main layers:  

1️⃣ Transport Layer  
2️⃣ Messaging Layer  
3️⃣ Description Layer  
4️⃣ Discovery Layer  


⭐ 1️⃣ Transport Layer  

🔹 Meaning  
This layer is responsible for sending data over the network.  

🔹 Protocols  
- HTTP (most common)  
- FTP  
- SMTP  

🔹 Role  
Send request and response between client and server  

🔹 Example  
Browser → HTTP → Server  


⭐ 2️⃣ Messaging Layer (SOAP)  

🔹 Meaning  
This layer defines how messages are formatted and exchanged.  

🔹 Protocol  
SOAP (Simple Object Access Protocol)  

🔹 Role  
Convert data into XML format and send it  

🔹 Example  
<soap>  
   <name>Raj</name>  
</soap>  


⭐ 3️⃣ Description Layer (WSDL)  

🔹 Meaning  
This layer describes how the web service works.  

🔹 Protocol  
WSDL (Web Services Description Language)  

🔹 Role  
Provides information about service methods, inputs, outputs  

🔹 Example  
Service: Weather API  
Input: city  
Output: temperature  


⭐ 4️⃣ Discovery Layer (UDDI)  

🔹 Meaning  
This layer helps to find web services.  

🔹 Protocol  
UDDI (Universal Description, Discovery, and Integration)  

🔹 Role  
Acts like a directory of services  


⭐ Complete Stack Diagram  

   Discovery Layer   → UDDI  
   -------------------------  
   Description Layer → WSDL  
   -------------------------  
   Messaging Layer   → SOAP  
   -------------------------  
   Transport Layer   → HTTP / FTP / SMTP  


⭐ How It Works (Flow)  

1️⃣ UDDI → Find service  
2️⃣ WSDL → Understand service  
3️⃣ SOAP → Send message  
4️⃣ HTTP → Deliver message  


⭐ One-Line Exam Answer  

The Web Service Protocol Stack consists of Transport (HTTP), Messaging (SOAP), Description (WSDL), and 
Discovery (UDDI) layers used for communication between web services.  


🎯 Easy Memory Trick  

Transport → Messaging → Description → Discovery  
(HTTP → SOAP → WSDL → UDDI)  
      `
    },
    {
      id: 34,
      question: "34. Explain SOAP Web Services with advantages & disadvantages.",
      answer: "📌 Important theory question",
      codeExample: `
⭐ SOAP Web Services

🔹 Definition  
SOAP (Simple Object Access Protocol) is a protocol used to exchange information between applications 
over the internet.  

📌 Simple Definition:  
SOAP is an XML-based protocol used for communication between web services.  


⭐ 1️⃣ XML-Based Protocol  

SOAP uses XML format to send and receive messages.  

Example:  
<soap>  
   <body>  
      <name>Raj</name>  
   </body>  
</soap>  

📌 All data is sent in structured XML format.  


⭐ 2️⃣ Platform Independent  

SOAP works on any platform and any programming language.  

📌 Example:  
Java ↔ .NET ↔ Python  

All can communicate using SOAP.  


⭐ 3️⃣ How SOAP Works (Simple)  

Client → SOAP Request (XML) → Server  
Server → SOAP Response (XML) → Client  


⭐ Simple Diagram  

Client  
  |  
  |  SOAP (XML Message)  
  v  
Web Service (Server)  
  |  
  v  
Response (XML)  


⭐ Advantages of SOAP  

1️⃣ Platform Independent  
→ Works with any language (Java, Python, etc.)  

2️⃣ Standard Protocol  
→ Uses standard rules (XML, HTTP)  

3️⃣ Secure  
→ Supports security features (WS-Security)  

4️⃣ Reliable  
→ Used in enterprise applications  


⭐ Disadvantages of SOAP  

1️⃣ Slow & Heavy ⭐  
→ Uses XML (large size) → takes more time  

2️⃣ Complex  
→ Difficult to understand and implement  

3️⃣ More Bandwidth  
→ Requires more data transfer  

4️⃣ Not Flexible  
→ Strict format compared to REST  


⭐ Quick Comparison Idea  

SOAP → Heavy, Secure, XML  
REST → Light, Fast, JSON  


⭐ One-Line Exam Answer  

SOAP is an XML-based protocol used for web services communication that is platform independent but 
slow and heavy due to its complex structure.  
      
      `
    },
    {
      id: 35,
      question: "35. Explain RESTful Web Services.",
      answer: "📌 Very important question",
      codeExample: `
⭐ RESTful Web Services

🔹 Definition  

REST stands for:  
RE → Representational  
S  → State  
T  → Transfer  

📌 Simple Definition:  
REST is an architectural style used to design web services that use HTTP for communication.  


⭐ 1️⃣ REST = Architectural Style  

- REST is not a protocol (like SOAP)  
- It is a design approach for building web services  

📌 It defines how web services should be created and used  


⭐ 2️⃣ Resource-Based  

In REST, everything is treated as a resource  

📌 A resource can be:  
- User  
- Product  
- Order  

Each resource is identified by a URL  

Example:  
/users  
/products  
/orders  

👉 User data = resource  


⭐ 3️⃣ HTTP Methods ⭐  

REST uses standard HTTP methods to perform operations  


🔹 GET  
→ Used to retrieve data  

Example:  
GET /users  
👉 Get all users  


🔹 POST  
→ Used to create new data  

Example:  
POST /users  
👉 Add new user  


🔹 PUT  
→ Used to update data  

Example:  
PUT /users/1  
👉 Update user with ID 1  


🔹 DELETE  
→ Used to delete data  

Example:  
DELETE /users/1  
👉 Delete user  


⭐ Simple Diagram  

Client (App)  
     |  
     | HTTP Request (GET / POST / PUT / DELETE)  
     v  
REST Web Service  
     |  
     v  
Server / Database  


⭐ Features of REST  

1️⃣ Lightweight (mostly uses JSON)  
2️⃣ Fast and simple  
3️⃣ Platform independent  
4️⃣ Easy to use  


⭐ Advantages  

- Faster than SOAP  
- Easy to understand  
- Uses simple HTTP methods  


⭐ Disadvantages  

- Less secure than SOAP  
- No strict standard  


⭐ One-Line Exam Answer  

RESTful Web Services are web services based on REST architecture that use HTTP methods like GET, POST, 
PUT, and DELETE to operate on resources.  


⭐ Quick Comparison (Very Important)  

SOAP → Protocol, XML, Heavy  
REST → Style, JSON, Light  
      
      
      `
    },
    {
      id: 36,
      question: "36.Difference between SOAP vs REST",
      answer: "📌 Guaranteed exam question",
      codeExample: `
      
| Point       | SOAP                  | REST                 |
| ------------| --------------------- | -------------------- |
| Type        | Protocol              | Architectural Style  |
| Speed       | Slow (heavy)          | Fast (lightweight)   |
| Data Format | Only XML              | JSON, XML, Text      |
| Performance | Low (more processing) | High (less overhead) |
| Complexity  | Complex               | Simple               |
| Flexibility | Less flexible         | More flexible        |


⭐ Easy Memory Trick
SOAP → Heavy, XML, Slow
REST → Light, JSON, Fast


⭐ One-Line Exam Answer

SOAP is a protocol that uses XML and is slower, while REST is an architectural style that supports multiple 
formats and provides better performance.

      
      `
    },
    {
      id: 37,
      question: "37. Explain REST Principles.",
      answer: "📌 Short/medium question",
      codeExample: `
⭐ REST Principles

REST (Representational State Transfer) follows some basic rules (principles) to design web services.  


⭐ 1️⃣ Stateless  

🔹 Meaning  
Each request from client to server must contain all information.  

📌 Server does NOT store previous request data  


🔹 Example  
Request 1 → Login  
Request 2 → Get data (must include login info again)  

👉 Server does NOT remember previous request  


🔹 Key Point  
No memory between requests  


⭐ 2️⃣ Client–Server  

🔹 Meaning  
Client and Server are separate systems  

- Client → sends request  
- Server → sends response  

🔹 Example  
Mobile App (Client) → API Server → Database  

🔹 Key Point  
Independent systems  


⭐ 3️⃣ Cacheable  

🔹 Meaning  
Responses can be stored (cached) for reuse  

📌 Improves speed and performance  

🔹 Example  
GET /products → stored in cache  
Next request → data comes from cache (faster)  

🔹 Key Point  
Faster response using cache  


⭐ 4️⃣ Layered System  

🔹 Meaning  
System can have multiple layers (client, server, proxy, gateway)  

📌 Client does not know how many layers exist  


🔹 Example  
Client → API Gateway → Server → Database  


🔹 Key Point  
Multiple layers for security & scalability  



⭐ Simple Diagram  

Client  
  |  
  v  
[ Layer 1 ]  
  |  
[ Layer 2 ]  
  |  
[ Server ]  


⭐ One-Line Exam Answer  

REST principles include stateless communication, client-server separation, cacheable responses, and 
layered system architecture.  


🎯 Quick Memory Trick  

Stateless → No memory  
Client-Server → Separate  
Cacheable → Fast  
Layered → Multiple levels  
      
      `
    },
    {
      id: 38,
      question: "38. 2–3 MARK",
      answer: "",
      codeExample: `
⭐ 1️⃣ WSDL → Service Description  

🔹 Meaning  
WSDL (Web Services Description Language) is used to describe a web service.  

📌 It tells:  
- What the service does  
- What inputs are required  
- What output is given  

🔹 Simple Line  
WSDL is used to describe how a web service works.  


⭐ 2️⃣ UDDI → Service Registry  

🔹 Meaning  
UDDI (Universal Description, Discovery, and Integration) is a directory of web services.  

📌 It helps to:  
- Store services  
- Find services  

🔹 Simple Line  
UDDI is used to register and discover web services.  


⭐ 3️⃣ HTTP Methods → GET, POST, PUT, DELETE  

🔹 Meaning  
These methods are used in REST APIs to perform operations.  

🔹 Functions  
GET → Retrieve data  
POST → Create data  
PUT → Update data  
DELETE → Remove data  

🔹 Example  
GET /users → get users  
POST /users → add user  


⭐ 4️⃣ SOAP → XML Protocol  

🔹 Meaning  
SOAP (Simple Object Access Protocol) is a protocol used for communication.  

📌 Uses:  
- XML format  
- Standard rules  

🔹 Simple Line  
SOAP is an XML-based protocol used for web service communication.  


⭐ 5️⃣ REST → Lightweight  

🔹 Meaning  
REST is an architectural style used to build web services.  

📌 Features:  
- Lightweight  
- Fast  
- Uses HTTP methods  

🔹 Simple Line  
REST is a lightweight and fast way to create web services.  



⭐ Final Quick Summary  

WSDL → Describe service  
UDDI → Find service  
HTTP → Operations (GET, POST, PUT, DELETE)  
SOAP → XML-based protocol  
REST → Lightweight architecture  





⭐ Difference Between REST and REST API

🔹 1️⃣ REST (Representational State Transfer)

Meaning:  
REST is an architectural style (design pattern) used to build web services.  

📌 It defines rules/principles like:  
- Stateless  
- Client-Server  
- Cacheable  
- Layered system  

👉 REST is a concept / theory (how to design system)  


🔹 2️⃣ REST API

Meaning:  
A REST API is an actual implementation of REST principles.  

📌 It is a web service that:  
- Uses HTTP methods (GET, POST, PUT, DELETE)  
- Works with resources (URLs like /users, /products)  
- Sends/receives data (usually JSON)  

👉 REST API is a real working system  


⭐ Key Differences

Point            REST                          REST API  
-------------------------------------------------------------  
Type             Architectural Style           Implementation (Service)  
Nature           Concept / Design              Practical Application  
Purpose          Defines rules                 Uses those rules  
Usage            Not directly used             Used by apps (frontend/backend)  
Example          Rules like Stateless          GET /users API  


⭐ Simple Understanding  

REST = Rules / Guidelines  
REST API = Actual code using those rules  


⭐ Real-Life Example  

REST → Traffic rules  
REST API → Cars following those rules  


⭐ One-Line Exam Answer  

REST is an architectural style that defines how web services should be designed, while a REST API is 
the actual implementation of those principles used to communicate between systems.  
      
      `
    },
    {
      id: 41,
      question: "41. Explain Spring MVC Architecture & Flow.",
      answer: "📌 Most important long question",
      codeExample: `
⭐ Spring MVC Architecture

🔹 Definition  
Spring MVC is a framework used to build web applications using the Model–View–Controller (MVC) design pattern.  


⭐ Main Components  

⭐ 1️⃣ Model  

🔹 Meaning  
- Holds data of the application  
- Interacts with the database  

📌 Example:  
User data, Product data  


⭐ 2️⃣ View  

🔹 Meaning  
- Responsible for UI (User Interface)  
- Displays data to the user  

📌 Example:  
JSP, HTML page  


⭐ 3️⃣ Controller  

🔹 Meaning  
- Handles user request  
- Processes input  
- Sends response  

📌 Example:  
LoginController, UserController  



⭐ ⭐ DispatcherServlet (Front Controller)  

🔹 Meaning  
DispatcherServlet is the main controller (front controller) in Spring MVC  

📌 It:  
- Receives all requests  
- Sends them to the correct controller  
- Controls the full flow  

🔹 Simple Line  
DispatcherServlet acts as the central controller of Spring MVC  



⭐ Other Important Components  

⭐ 4️⃣ HandlerMapping  

🔹 Meaning  
Finds which controller should handle the request  

📌 Example:  
/user → UserController  


⭐ 5️⃣ ViewResolver  

🔹 Meaning  
Decides which view (page) to show  

📌 Example:  
"home" → home.jsp  


⭐ Complete Architecture Diagram  

Client (Browser)  
        |  
        v  
 DispatcherServlet  
        |  
        v  
  HandlerMapping  
        |  
        v  
   Controller  
        |  
        v  
     Model  
        |  
        v  
 ViewResolver  
        |  
        v  
     View (JSP)  
        |  
        v  
     Response  


⭐ Flow of Spring MVC (Step-by-Step)  

🔹 Step 1  
Client sends request  
Browser → DispatcherServlet  

🔹 Step 2  
DispatcherServlet receives request  

🔹 Step 3  
HandlerMapping finds controller  

🔹 Step 4  
Controller processes request  
- Calls Model  
- Gets data  

🔹 Step 5  
Controller returns view name  

🔹 Step 6  
ViewResolver finds actual page  

🔹 Step 7  
View displays data to user  


⭐ Simple Flow Summary  

Request → DispatcherServlet → Controller → Model → View → Response  


⭐ One-Line Exam Answer  

Spring MVC architecture consists of Model, View, and Controller with DispatcherServlet acting as the 
front controller, along with HandlerMapping and ViewResolver to process requests.  


🎯 Easy Memory Trick  

DispatcherServlet → Main boss  
HandlerMapping → Find controller  
ViewResolver → Find page  
      `
    },
    {
      id: 42,
      question: "42. What is Spring Framework? Explain its features.",
      answer: "📌 Basic theory question",
      codeExample: `
⭐ What is Spring Framework?

🔹 Definition  
Spring Framework is a Java framework used to develop enterprise applications easily.  

📌 Simple Meaning:  
- Helps to build web apps, APIs, and large systems  
- Reduces coding complexity  


⭐ Features of Spring Framework  

⭐ 1️⃣ Lightweight  

🔹 Meaning  
Spring is lightweight (small and fast).  

📌 It does not require heavy resources  


🔹 Example  
Small configuration + less code  


🔹 Key Point  
Easy to use and fast  


⭐ 2️⃣ IoC (Inversion of Control)  

🔹 Meaning  
In Spring, object creation is controlled by the container, not by the programmer  


📌 Normally:  
Car c = new Car();  
👉 You create object manually  


📌 In Spring:  
Spring container creates and manages objects  


🔹 Simple Line  
IoC means control is given to Spring, not the developer  



⭐ 3️⃣ AOP (Aspect-Oriented Programming)

🔹 Simple Idea  
AOP means putting common work (like logging, security) in one place instead of writing it again and again.  


⭐ First Understand the Problem ❗  

Suppose you have 3 methods:  

login()  
register()  
payment()  


Now you want to add logging (print "method called") in all:  

login() {  
   print("log");  
   // code  
}  

register() {  
   print("log");  
   // code  
}  

payment() {  
   print("log");  
   // code  
}  


❌ Problem:  
- Same code repeated again & again  
- Code becomes messy  


⭐ Solution → AOP ✅  

With AOP, you write logging only once:  

👉 Apply logging to all methods automatically  

Spring will automatically add it everywhere  


⭐ Real-Life Example 🧠  

Think like this:  

🏫 In college:  
Every class needs attendance  

Instead of teacher taking attendance in each class manually  
👉 One system handles attendance for all classes  

🔹 Key Point  
Separates cross-cutting concerns  


⭐ 4️⃣ Integration  

🔹 Meaning  
Spring easily integrates with other technologies  


📌 Can work with:  
- Hibernate  
- JDBC  
- Servlet  
- REST APIs  


🔹 Example  
Spring + Hibernate → Database  
Spring + REST → API  


⭐ Simple Diagram  

Spring Framework  
      |  
-------------------------  
|    |     |      |  
IoC  AOP   MVC  Integration  


⭐ One-Line Exam Answer  

Spring Framework is a lightweight Java framework that supports features like IoC, AOP, and easy 
integration for building enterprise applications.  


🎯 Easy Memory Trick  

Spring = Lightweight + IoC + AOP + Integration  
      
      `
    },
    {
      id: 43,
      question: "43. Explain IoC (Inversion of Control) Container.",
      answer: "📌 Frequently asked",
      codeExample: `
⭐ What is IoC (Inversion of Control) Container?

🔹 Simple Meaning  
IoC Container is a part of Spring that creates and manages objects (beans).  


🔹 First Understand Normally ❗  

In normal Java:  

Car c = new Car();  

👉 You (developer) create object manually  


🔹 In Spring (IoC) ✅  

Spring creates object for you  

👉 You don’t use new  
👉 Spring container handles everything  


🔹 Why “Inversion of Control”?  

Normally → You control object creation  
In Spring → Spring controls object creation  

📌 So control is inverted (reversed)  


⭐ Real-Life Example 🧠  

Think like food order:  

❌ Without IoC:  
You go to kitchen and cook yourself  

✅ With IoC:  
You order food → kitchen prepares → you just use  

👉 Spring = Kitchen 🍽️  


⭐ Types of IoC Container  

There are 2 main types:  


⭐ 1️⃣ BeanFactory  

🔹 Meaning  
Basic and simple container  
Creates objects only when needed  

🔹 Key Point  
Lazy loading (object created when required)  

🔹 Example Idea  
You ask → then object is created  


⭐ 2️⃣ ApplicationContext ⭐  

🔹 Meaning  
Advanced container (used most)  
Creates objects at start  

🔹 Key Point  
Eager loading (created at startup)  

🔹 Extra Features  
- AOP support  
- Event handling  
- Internationalization  

🔹 Example Idea  
App starts → all objects ready  


⭐ Difference (Very Important)  

Point                BeanFactory           ApplicationContext  
-------------------------------------------------------------  
Type                 Basic                 Advanced  
Object Creation      Lazy (on demand)      Eager (on startup)  
Features             Limited               More features  


⭐ Simple Diagram  

IoC Container  
     |  
---------------------  
|                   |  
BeanFactory     ApplicationContext  


⭐ One-Line Exam Answer  

IoC Container in Spring is responsible for creating and managing objects, and its main types are 
BeanFactory and ApplicationContext.  


🎯 Easy Memory Trick  

BeanFactory → Lazy  
ApplicationContext → Ready at start  
      `
    },
    {
      id: 44,
      question: "44. Explain Dependency Injection (DI).",
      answer: "",
      codeExample: `
⭐ What is Dependency Injection (DI)?

🔹 Simple Meaning  
Dependency Injection means giving required objects (dependencies) from outside instead of creating them inside.  


🔹 First Understand the Problem ❗  

❌ Without DI:  

class Car {  
   Engine e = new Engine(); // tightly connected  
}  

👉 Problem:  
- Car is directly creating Engine  
- Hard to change / test  


🔹 With DI ✅  

class Car {  
   Engine e;  

   Car(Engine e) {  
      this.e = e;  
   }  
}  

👉 Engine is given from outside  


🔹 Key Idea  
Don't create object → Receive object  


⭐ Real-Life Example 🧠  

❌ Without DI:  
You cook food yourself  

✅ With DI:  
Food is delivered to you  

👉 You just use it  


⭐ Types of Dependency Injection  

There are 3 types:  


⭐ 1️⃣ Constructor Injection  

🔹 Meaning  
Dependency is passed through constructor  

🔹 Example  

class Car {  
   Engine e;  

   Car(Engine e) {   // constructor injection  
      this.e = e;  
   }  
}  

🔹 Key Point  
Object given at time of creation  


⭐ 2️⃣ Setter Injection  

🔹 Meaning  
Dependency is set using setter method  

🔹 Example  

class Car {  
   Engine e;  

   void setEngine(Engine e) {  
      this.e = e;  
   }  
}  

🔹 Key Point  
Object given after creation  


⭐ 3️⃣ Field Injection  

🔹 Meaning  
Dependency is injected directly into variable  

🔹 Example (Spring)  

class Car {  
   @Autowired  
   Engine e;   // field injection  
}  

🔹 Key Point  
No constructor or setter needed  


⭐ Difference (Easy Table)  

Type                     How it works  
------------------------------------------  
Constructor Injection    Through constructor  
Setter Injection         Through setter method  
Field Injection          Directly into variable  


⭐ Simple Diagram  

Car → needs Engine  

Constructor → Car(Engine)  
Setter → setEngine(Engine)  
Field → @Autowired Engine  


⭐ One-Line Exam Answer  

Dependency Injection is a technique where objects are provided from outside, and its types include 
Constructor, Setter, and Field Injection.  


🎯 Easy Memory Trick  

Constructor → at start  
Setter → after start  
Field → directly  


---------------------------------------------------------------------


⭐ First Understand in 1 Line  

👉 DI = Don’t create object → Get object from outside  


❌ WITHOUT Dependency Injection  

You create object yourself:  

class Engine {  
    void start() {  
        System.out.println("Engine started");  
    }  
}  

class Car {  
    Engine e = new Engine(); // ❌ tightly connected  

    void drive() {  
        e.start();  
        System.out.println("Car is running");  
    }  
}  

public class Main {  
    public static void main(String[] args) {  
        Car c = new Car();  
        c.drive();  
    }  
}  


❌ Problem:  
- Car is fixed with Engine  
- Cannot easily change or test  


✅ WITH Dependency Injection (Constructor Injection)  

Now object comes from outside:  

class Engine {  
    void start() {  
        System.out.println("Engine started");  
    }  
}  

class Car {  
    Engine e;  

    // Constructor Injection  
    Car(Engine e) {  
        this.e = e;  
    }  

    void drive() {  
        e.start();  
        System.out.println("Car is running");  
    }  
}  

public class Main {  
    public static void main(String[] args) {  

        Engine e1 = new Engine();   // created outside  
        Car c = new Car(e1);        // injected into Car  

        c.drive();  
    }  
}  


⭐ OUTPUT  

Engine started  
Car is running  


⭐ What Changed? (VERY IMPORTANT)  

Before → Car creates Engine  
After  → Engine given to Car  

👉 This is Dependency Injection  


⭐ Now Types with Simple Programs  


⭐ 1️⃣ Constructor Injection  

Car(Engine e) {  
    this.e = e;  
}  

👉 Given while creating object  


⭐ 2️⃣ Setter Injection  

class Car {  
    Engine e;  

    void setEngine(Engine e) {  
        this.e = e;  
    }  

    void drive() {  
        e.start();  
        System.out.println("Car running");  
    }  
}  

public class Main {  
    public static void main(String[] args) {  
        Engine e = new Engine();  
        Car c = new Car();  

        c.setEngine(e); // injection here  
        c.drive();  
    }  
}  

👉 Given after object creation  


⭐ 3️⃣ Field Injection (Spring)  


🔹 Meaning  
Dependency is injected directly into variable  


⭐ FULL WORKING EXAMPLE (Spring)  


⭐ 1️⃣ Engine Class  

import org.springframework.stereotype.Component;  

@Component   // tells Spring to create object  
class Engine {  

    public void start() {  
        System.out.println("Engine started");  
    }  
}  


⭐ 2️⃣ Car Class (Field Injection)  

import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.stereotype.Component;  

@Component   // Spring will manage this class  
class Car {  

    @Autowired   // Spring injects Engine automatically  
    Engine e;  

    public void drive() {  
        e.start();  
        System.out.println("Car is running");  
    }  
}  


⭐ 3️⃣ Main Class  

import org.springframework.context.ApplicationContext;  
import org.springframework.context.annotation.AnnotationConfigApplicationContext;  
import org.springframework.context.annotation.ComponentScan;  
import org.springframework.context.annotation.Configuration;  

@Configuration  
@ComponentScan   // scan for @Component classes  
class AppConfig {}  

public class Main {  
    public static void main(String[] args) {  

        ApplicationContext context =  
            new AnnotationConfigApplicationContext(AppConfig.class);  

        Car c = context.getBean(Car.class);  // get object from Spring  
        c.drive();  
    }  
}  


⭐ OUTPUT  

Engine started  
Car is running  


⭐ How It Works (VERY IMPORTANT)  

Step-by-step:  

1️⃣ @Component → Spring creates objects (Engine, Car)  
2️⃣ @Autowired → Spring connects Engine to Car  
3️⃣ context.getBean(Car.class) → get Car object  
4️⃣ Car uses Engine → output printed  


🔹 Key Point  
No constructor or setter needed  


⭐ Difference (Easy Table)  

Type                     How it works  
------------------------------------------  
Constructor Injection    Through constructor  
Setter Injection         Through setter method  
Field Injection          Directly into variable  


⭐ Simple Diagram  

Car → needs Engine  

Constructor → Car(Engine)  
Setter → setEngine(Engine)  
Field → @Autowired Engine  


⭐ One-Line Exam Answer  

Dependency Injection is a technique where objects are provided from outside, and its types include 
Constructor, Setter, and Field Injection.  


      `
    },
    {
      id: 45,
      question: "45. Explain Hibernate Architecture.",
      answer: "📌 Important long answer",
      codeExample: `
⭐ Hibernate Architecture

🔹 Definition  
Hibernate is a framework used to connect Java applications with databases (ORM – Object Relational Mapping).  

📌 It converts:  
Java Objects ↔ Database Tables  


⭐ Main Components of Hibernate  

⭐ 1️⃣ SessionFactory  

🔹 Meaning  
- Main factory object in Hibernate  
- Creates Session objects  

🔹 Key Points  
- Created once (at startup)  
- Heavy object  

🔹 Simple Idea  
👉 Like a factory that produces sessions  


⭐ 2️⃣ Session  

🔹 Meaning  
Used to interact with the database  

🔹 Work  
- Save data  
- Update data  
- Delete data  
- Fetch data  

🔹 Example Idea  
Session → perform database operations  


⭐ 3️⃣ Transaction  

🔹 Meaning  
Ensures data consistency  

🔹 Work  
Begin → Do work → Commit / Rollback  

🔹 Example  
Money transfer → must complete fully or cancel  


⭐ 4️⃣ ConnectionProvider  

🔹 Meaning  
Provides database connection  

🔹 Work  
Connects Hibernate → Database  


⭐ Simple Architecture Diagram  

Java Application  
        |  
        v  
   SessionFactory  
        |  
        v  
     Session  
        |  
        v  
   Transaction  
        |  
        v  
ConnectionProvider  
        |  
        v  
     Database  


⭐ Working Flow (Step-by-Step)  

1️⃣ Application creates SessionFactory  
2️⃣ SessionFactory creates Session  
3️⃣ Session starts Transaction  
4️⃣ Perform operations (save, update, delete)  
5️⃣ Transaction commit / rollback  
6️⃣ ConnectionProvider connects to database  


⭐ One-Line Exam Answer  

Hibernate architecture includes SessionFactory, Session, Transaction, and ConnectionProvider to manage 
database operations efficiently.  


🎯 Easy Memory Trick  

SessionFactory → Create session  
Session → Do work  
Transaction → Control work  
ConnectionProvider → Connect DB  




⭐ 1️⃣ Entity Class (Student.java)  

// Entity class (represents table)  
import jakarta.persistence.*;  

@Entity                      // marks this class as table  
@Table(name = "student")  
public class Student {  

    @Id                     // primary key  
    private int id;  

    private String name;  
    private int marks;  

    // Getter and Setter  
    public int getId() { return id; }  
    public void setId(int id) { this.id = id; }  

    public String getName() { return name; }  
    public void setName(String name) { this.name = name; }  

    public int getMarks() { return marks; }  
    public void setMarks(int marks) { this.marks = marks; }  
}  


⭐ 2️⃣ Hibernate Config (hibernate.cfg.xml)  

<!-- Configuration file -->  
<!DOCTYPE hibernate-configuration PUBLIC  
 "-//Hibernate/Hibernate Configuration DTD 3.0//EN"  
 "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">  

<hibernate-configuration>  
 <session-factory>  

  <!-- Database connection -->  
  <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>  
  <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/test</property>  
  <property name="hibernate.connection.username">root</property>  
  <property name="hibernate.connection.password">root</property>  

  <!-- Hibernate settings -->  
  <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>  
  <property name="hibernate.hbm2ddl.auto">update</property>  
  <property name="show_sql">true</property>  

  <!-- Mapping class -->  
  <mapping class="Student"/>  

 </session-factory>  
</hibernate-configuration>  


⭐ 3️⃣ Main Program (Insert Data)  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  

public class MainApp {  
    public static void main(String[] args) {  

        // Step 1: Create Configuration  
        Configuration cfg = new Configuration();  
        cfg.configure("hibernate.cfg.xml");   // load config file  

        // Step 2: Create SessionFactory  
        SessionFactory factory = cfg.buildSessionFactory();  

        // Step 3: Create Session  
        Session session = factory.openSession();  

        // Step 4: Begin Transaction  
        Transaction tx = session.beginTransaction();  

        // Step 5: Create object  
        Student s = new Student();  
        s.setId(1);  
        s.setName("Raj");  
        s.setMarks(90);  

        // Step 6: Save object  
        session.save(s);  

        // Step 7: Commit transaction  
        tx.commit();  

        // Step 8: Close session  
        session.close();  

        System.out.println("Data Inserted Successfully!");  
    }  
}  


⭐ Output  

Data Inserted Successfully!  


⭐ Step-by-Step Flow (Very Important)  

1️⃣ Load configuration  
2️⃣ Create SessionFactory  
3️⃣ Open Session  
4️⃣ Begin Transaction  
5️⃣ Create object  
6️⃣ Save data  
7️⃣ Commit  
8️⃣ Close session  


⭐ Easy Memory Trick  

Config → Factory → Session → Transaction → Save → Commit  
      `
    },
    {
      id: 46,
      question: "46. What is ORM (Object Relational Mapping)? Explain in Hibernate.",
      answer: "📌 Common theory question",
      codeExample: `
⭐ What is ORM (Object Relational Mapping)?

🔹 Definition  
ORM is a technique used to convert Java objects into database tables and vice versa.  


🔹 Simple Meaning  
Java Object ↔ Database Table  

👉 It creates a bridge between Java and Database  


⭐ Why ORM is Used?  

❌ Without ORM  
- You write SQL queries manually  

✅ With ORM  
- Hibernate handles database automatically  


⭐ ORM in Hibernate  

Hibernate uses ORM to map:  


⭐ 1️⃣ Mapping Class ↔ Table  

- Java class = Database table  

Example:  
class Student  
Table → student  

👉 Class name becomes table name  


⭐ 2️⃣ Field ↔ Column  

- Variables = Columns  

Example:  
int id;  
String name;  

Columns → id, name  


⭐ Simple Mapping Diagram  

Java Class (Student)  
---------------------  
id      → column id  
name    → column name  
marks   → column marks  

        ↓  

Database Table (student)  
------------------------  
id | name | marks  


⭐ 3️⃣ XML / Annotation Mapping  

Hibernate provides 2 ways to define mapping:  


🔹 (A) XML Mapping  

Mapping written in XML file  

<class name="Student" table="student">  
   <id name="id"/>  
   <property name="name"/>  
</class>  


🔹 (B) Annotation Mapping ⭐ (Most Used)  

Mapping written using annotations in Java class  

@Entity  
@Table(name="student")  
class Student {  

   @Id  
   private int id;  

   private String name;  
}  


⭐ Key Idea  

Class → Table  
Field → Column  
Object → Record (Row)  


⭐ Advantages of ORM  

1️⃣ No need to write SQL  
2️⃣ Easy to use  
3️⃣ Saves time  
4️⃣ Reduces code  


⭐ One-Line Exam Answer  

ORM is a technique that maps Java objects to database tables, where classes map to tables and fields 
map to columns using XML or annotations.  


🎯 Easy Memory Trick  

Class → Table  
Field → Column  
Object → Row  




⭐ 1️⃣ Hibernate Program using XML Mapping  


🔹 (A) Student.java  

// Simple POJO class (no annotations)  
public class Student {  
    private int id;  
    private String name;  

    // Getter & Setter  
    public int getId() { return id; }  
    public void setId(int id) { this.id = id; }  

    public String getName() { return name; }  
    public void setName(String name) { this.name = name; }  
}  


🔹 (B) student.hbm.xml  

<!-- Mapping file -->  
<hibernate-mapping>  
    <class name="Student" table="student">  
        <id name="id" column="id"/>  
        <property name="name" column="name"/>  
    </class>  
</hibernate-mapping>  


🔹 (C) hibernate.cfg.xml  

<hibernate-configuration>  
 <session-factory>  

  <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>  
  <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/test</property>  
  <property name="hibernate.connection.username">root</property>  
  <property name="hibernate.connection.password">root</property>  

  <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>  
  <property name="hibernate.hbm2ddl.auto">update</property>  

  <!-- Mapping file -->  
  <mapping resource="student.hbm.xml"/>  

 </session-factory>  
</hibernate-configuration>  


🔹 (D) Main Program  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  

public class MainXML {  
    public static void main(String[] args) {  

        Configuration cfg = new Configuration();  
        cfg.configure("hibernate.cfg.xml");  

        SessionFactory factory = cfg.buildSessionFactory();  
        Session session = factory.openSession();  
        Transaction tx = session.beginTransaction();  

        Student s = new Student();  
        s.setId(1);  
        s.setName("Raj");  

        session.save(s);  

        tx.commit();  
        session.close();  

        System.out.println("Data Inserted (XML Mapping)");  
    }  
}  



⭐ 2️⃣ Hibernate Program using Annotation Mapping ⭐  


🔹 (A) Student.java  

import jakarta.persistence.*;  

@Entity  
@Table(name="student")  
public class Student {  

    @Id  
    private int id;  

    private String name;  

    // Getter & Setter  
    public int getId() { return id; }  
    public void setId(int id) { this.id = id; }  

    public String getName() { return name; }  
    public void setName(String name) { this.name = name; }  
}  


🔹 (B) hibernate.cfg.xml  

<hibernate-configuration>  
 <session-factory>  

  <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>  
  <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/test</property>  
  <property name="hibernate.connection.username">root</property>  
  <property name="hibernate.connection.password">root</property>  

  <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>  
  <property name="hibernate.hbm2ddl.auto">update</property>  

  <!-- Mapping class -->  
  <mapping class="Student"/>  

 </session-factory>  
</hibernate-configuration>  


🔹 (C) Main Program  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  

public class MainAnnotation {  
    public static void main(String[] args) {  

        Configuration cfg = new Configuration();  
        cfg.configure("hibernate.cfg.xml");  

        SessionFactory factory = cfg.buildSessionFactory();  
        Session session = factory.openSession();  
        Transaction tx = session.beginTransaction();  

        Student s = new Student();  
        s.setId(2);  
        s.setName("Amit");  

        session.save(s);  

        tx.commit();  
        session.close();  

        System.out.println("Data Inserted (Annotation)");  
    }  
}  


⭐ Key Difference (VERY IMPORTANT)  

XML Mapping → Mapping in separate XML file  
Annotation → Mapping inside Java class  


🎯 Easy Memory Trick  

XML → External file  
Annotation → Inside class  
      
      `
    },
    {
      id: 47,
      question: "47. Explain HQL (Hibernate Query Language).",
      answer: "📌 High chance question",
      codeExample: `
⭐ What is HQL (Hibernate Query Language)?

🔹 Definition  
HQL is a query language used in Hibernate to perform database operations using Java class names 
instead of table names.  


🔹 Simple Meaning  
HQL → Works on Objects  
SQL → Works on Tables  

👉 HQL uses class & field names, not table/column names  


⭐ Difference between HQL and SQL  

| Point              | HQL            | SQL                     |
| ------------------ | -------------- | ----------------------- |
| Works On           | Java Objects   | Database Tables         |
| Names Used         | Class & fields | Table & columns         |
| Database Dependent | No             | Yes                     |
| Example            | from Student   | SELECT * FROM student   |


⭐ HQL Examples  

Assume:  

class Student {  
   int id;  
   String name;  
}  


⭐ 1️⃣ SELECT Query  

Query q = session.createQuery("from Student");  
List<Student> list = q.list();  

📌 Meaning:  
Get all Student objects  


⭐ 2️⃣ UPDATE Query  

Query q = session.createQuery("update Student set name='Raj' where id=1");  
q.executeUpdate();  

📌 Meaning:  
Update name of student with id = 1  


⭐ 3️⃣ DELETE Query  

Query q = session.createQuery("delete from Student where id=1");  
q.executeUpdate();  

📌 Meaning:  
Delete student with id = 1  


⭐ Simple Diagram  

Java Object (Student)  
        |  
        v  
       HQL  
        |  
        v  
     Database  


⭐ Key Points  

1️⃣ Uses class name, not table name  
2️⃣ Database independent  
3️⃣ Easy to use  


⭐ One-Line Exam Answer  

HQL is a Hibernate query language that works on Java objects and is used to perform operations like 
SELECT, UPDATE, and DELETE.  


🎯 Easy Memory Trick  

HQL → Object based  
SQL → Table based  




⭐ HQL Program Example  


🔹 Assumption  

You already have Student entity class:  

@Entity  
@Table(name="student")  
public class Student {  

    @Id  
    private int id;  
    private String name;  

    // getters & setters  
}  


⭐ Main Program (HQL Operations)  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  
import java.util.List;  

public class HQLExample {  
    public static void main(String[] args) {  

        // Step 1: Load configuration  
        Configuration cfg = new Configuration().configure("hibernate.cfg.xml");  

        // Step 2: Create SessionFactory  
        SessionFactory factory = cfg.buildSessionFactory();  

        // Step 3: Open Session  
        Session session = factory.openSession();  

        // Step 4: Begin Transaction  
        Transaction tx = session.beginTransaction();  


        // =========================  
        // ⭐ 1️⃣ SELECT Query  
        // =========================  
        Query q1 = session.createQuery("from Student"); // HQL  
        List<Student> list = q1.list();  

        System.out.println("---- SELECT ----");  
        for(Student s : list) {  
            System.out.println(s.getId() + " " + s.getName());  
        }  


        // =========================  
        // ⭐ 2️⃣ UPDATE Query  
        // =========================  
        Query q2 = session.createQuery(  
            "update Student set name='UpdatedName' where id=1"  
        );  
        int updated = q2.executeUpdate();  
        System.out.println("Updated Rows: " + updated);  


        // =========================  
        // ⭐ 3️⃣ DELETE Query  
        // =========================  
        Query q3 = session.createQuery(  
            "delete from Student where id=2"  
        );  
        int deleted = q3.executeUpdate();  
        System.out.println("Deleted Rows: " + deleted);  


        // Step 5: Commit Transaction  
        tx.commit();  

        // Step 6: Close Session  
        session.close();  

        System.out.println("HQL Operations Done!");  
    }  
}  


⭐ Output Example  

---- SELECT ----  
1 Raj  
2 Amit  

Updated Rows: 1  
Deleted Rows: 1  

HQL Operations Done!  


⭐ Step-by-Step Flow  

1️⃣ Load config  
2️⃣ Open session  
3️⃣ Start transaction  
4️⃣ Run HQL queries  
5️⃣ Commit  
6️⃣ Close session  


⭐ Important Points  

"from Student" → uses class name (not table)  
"update Student" → object-based query  
"delete from Student" → remove object  


⭐ One-Line Exam Tip  

In HQL program, we use session.createQuery() to execute object-based queries like SELECT, UPDATE, and 
DELETE.  
      
      `
    },
    {
      id: 1,
      question: "1.",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1.",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1.",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1.",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1.",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1.",
      answer: "",
      codeExample: ``
    },

    {
      id: 1111,
      question: "how to download jar folder",
      answer: "",
      codeExample: `
🔹 Step 1: Open browser

Go to Google and search:

    MySQL Connector J download

Open the official MySQL site.



🔹 Step 2: Download

1. Click MySQL Connector/J
2. Choose Platform Independent
3. Download ZIP file
4. Login not required → click No thanks, just start my download



🔹 Step 3: Extract ZIP file

After download:
    Right click → Extract All
    You will see a folder like:

mysql-connector-j-8.0.33

Open it.




✅ SIMPLE ANSWER (BEST PATH FOR YOU)

👉 Extract the ZIP file to this folder:

C:-xampp-htdocs-java-


This is the same folder where your LoginApp.java file is.


🔹 Step-by-Step (Very clear)

1️⃣ You downloaded the ZIP file

Example file name:

mysql-connector-j-8.0.33.zip


It is probably in:

    Downloads



2️⃣ Right-click the ZIP file
Click Extract All



3️⃣ When it asks “Extract to where?”

➡️ Click Browse
➡️ Choose this path:

    C:-xampp-htdocs-java-

➡️ Click Extract



4️⃣ After extracting, open the folder

You will see a folder like:

    mysql-connector-j-8.0.33


Open it and COPY this file 👇

    mysql-connector-j-8.0.33.jar



5️⃣ Paste the JAR here (IMPORTANT)

Paste it directly inside:

    C:-xampp-htdocs-java-


Final folder should look like:

C:xampp-htdocs-java-
│── LoginApp.java
│── LoginApp.class
│── mysql-connector-j-8.0.33.jar


✅ Now run commands (it WILL work)

javac LoginApp.java
java -cp .;mysql-connector-j-8.0.33.jar LoginApp
`
    },
    {
      id: 1.1,
      question: "1. JDBC Connectivity Develop a java application using concept of JDBC for user login. User will enter username and password. Application will match for the same in database table. If match is found then display message 'Successful Login' and if not found then display message 'Invalid Username and password'.",
      answer: "",
      codeExample: `
command write for 

compile : javac filename.java  
run: java -cp ".;mysql-connector-j-9.6.0.jar" filename



🔹 Step 1: Database Table (MySQL Example)

Assume database name: java
Table name: users

CREATE TABLE users (
    username VARCHAR(50),
    password VARCHAR(50)
);



Insert sample data:

INSERT INTO users VALUES ('admin', '1234');
INSERT INTO users VALUES ('raj', 'raj123');




Java program LoginApp.java :

import java.sql.*;
import java.util.Scanner;

public class LoginApp {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Taking input from user
        System.out.print("Enter Username: ");
        String uname = sc.nextLine();

        System.out.print("Enter Password: ");
        String pass = sc.nextLine();

        try {
            // 1. Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            // 3. SQL Query
            String sql = "SELECT * FROM users WHERE username=? AND password=?";

            // 4. Prepare Statement
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, uname);   // set username
            ps.setString(2, pass);    // set password

            // 5. Execute Query
            ResultSet rs = ps.executeQuery();

            // 6. Check Result
            if (rs.next()) {
                System.out.println("Successful Login");
            } else {
                System.out.println("Invalid Username and password");
            }

            // 7. Close Connection
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


Expected Output

Enter Username: raj
Enter Password: raj123
Successful Login


      `
    },
    {
      id: 2.2,
      question: "2. JDBC Connectivity & CRUD Operations Develop a Menu driven java application for student information which will create the table with appropriate columns. Menu will contain the options like insert, update and delete. Based on the option, data will be inserted or updated or deleted from table based on student id (student_id will be primary key). Display appropriate message for each operation.",
      answer: "",
      codeExample: `
🔹 Database Details (MySQL)

Database name: java


Student Table

CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    course VARCHAR(50),
    marks INT
);



🔹 Complete Menu-Driven JDBC Program (CRUD)

import java.sql.*;
import java.util.Scanner;

public class StudentCRUD {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {
            // 1. Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""   // empty password (XAMPP)
            );

            while (true) {

                System.out.println("\n----- STUDENT MENU -----");
                System.out.println("1. Insert Student");
                System.out.println("2. Update Student");
                System.out.println("3. Delete Student");
                System.out.println("4. Exit");
                System.out.print("Enter choice: ");

                int choice = sc.nextInt();

                switch (choice) {

                    // INSERT
                    case 1:
                        System.out.print("Enter Student ID: ");
                        int id = sc.nextInt();
                        sc.nextLine();

                        System.out.print("Enter Name: ");
                        String name = sc.nextLine();

                        System.out.print("Enter Course: ");
                        String course = sc.nextLine();

                        System.out.print("Enter Marks: ");
                        int marks = sc.nextInt();

                        String insertSql =
                                "INSERT INTO student VALUES (?, ?, ?, ?)";

                        PreparedStatement ps1 =
                                con.prepareStatement(insertSql);

                        ps1.setInt(1, id);
                        ps1.setString(2, name);
                        ps1.setString(3, course);
                        ps1.setInt(4, marks);

                        int i = ps1.executeUpdate();

                        if (i > 0)
                            System.out.println("Student Inserted Successfully");
                        else
                            System.out.println("Insert Failed");
                        break;

                    // UPDATE
                    case 2:
                        System.out.print("Enter Student ID to Update: ");
                        int uid = sc.nextInt();
                        sc.nextLine();

                        System.out.print("Enter New Course: ");
                        String newCourse = sc.nextLine();

                        String updateSql =
                                "UPDATE student SET course=? WHERE student_id=?";

                        PreparedStatement ps2 =
                                con.prepareStatement(updateSql);

                        ps2.setString(1, newCourse);
                        ps2.setInt(2, uid);

                        int u = ps2.executeUpdate();

                        if (u > 0)
                            System.out.println("Student Updated Successfully");
                        else
                            System.out.println("Student ID Not Found");
                        break;

                    // DELETE
                    case 3:
                        System.out.print("Enter Student ID to Delete: ");
                        int did = sc.nextInt();

                        String deleteSql =
                                "DELETE FROM student WHERE student_id=?";

                        PreparedStatement ps3 =
                                con.prepareStatement(deleteSql);

                        ps3.setInt(1, did);

                        int d = ps3.executeUpdate();

                        if (d > 0)
                            System.out.println("Student Deleted Successfully");
                        else
                            System.out.println("Student ID Not Found");
                        break;

                    case 4:
                        System.out.println("Thank You!");
                        con.close();
                        System.exit(0);

                    default:
                        System.out.println("Invalid Choice");
                }
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}




🔹 Sample Output
----- STUDENT MENU -----
1. Insert Student
2. Update Student
3. Delete Student
4. Exit
Enter choice: 1

Enter Student ID: 101
Enter Name: Raj
Enter Course: Java
Enter Marks: 85
Student Inserted Successfully




🧠 Viva Questions (Quick)

Q1. What is CRUD?
Create, Read, Update, Delete

Q2. Why PreparedStatement?
For security and performance

Q3. What is Primary Key?
Unique identifier for each record
      `
    },
    {
      id: 3.3,
      question: "3. Data Driven GUI Application: Develop an application using GUI for user registration. In first form user will enter the data for registration (e.g. Name, Birthdate, Email_id, Phone_No). When user clicks on submit button, data will be inserted into database and user will be redirected to another form. In this form data will be selected from database and displayed in proper format.",
      answer: "",
      codeExample: `
step 1:

First you create one folder like DataDrivenGUIApplication.


step 2:
    
Next create file structure like this:

src
 ├ DisplayServlet.java
 ├ RegisterServlet.java
 │
WEB-INF
 ├ classes
 │   ├ RegisterServlet.class
 │   └ DisplayServlet.class
 │
 └ lib
 │   └ mysql-connector-j-9.6.0.jar
 │
 register.html


step 3:

Add your project in tomcate server like choos "Add Deployement" button
-> select your project folder file and click No button to Edit


step 4:

compile your .java file and create .class file and past in classes folder:

    javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" filename.java


step 5:

start tomcat server


step 6: 

see to output:

    http://localhost:8080/DataDrivenGUIApplication/register.html


---------------------------------------------------------------------------------------



Create Table inside the java database:

CREATE TABLE registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    birthdate DATE,
    email VARCHAR(50),
    phone VARCHAR(20)
);


----------------------------------

register.html

<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<body>

<h2>User Registration Form</h2>

<form action="RegisterServlet" method="post">
    Name: <input type="text" name="name"><br><br>
    Birthdate: <input type="date" name="birthdate"><br><br>
    Email: <input type="email" name="email"><br><br>
    Phone: <input type="text" name="phone"><br><br>

    <input type="submit" value="Register">
</form>

</body>
</html>

----------------------------------

RegisterServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.sql.*;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String birthdate = request.getParameter("birthdate");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            String sql = "INSERT INTO registration(name,birthdate,email,phone) VALUES(?,?,?,?)";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, name);
            ps.setString(2, birthdate);
            ps.setString(3, email);
            ps.setString(4, phone);

            int i = ps.executeUpdate();

            if(i > 0){
                response.sendRedirect("DisplayServlet");
            } else {
                out.println("Registration Failed");
            }

            con.close();

        } catch (Exception e) {
            out.println(e);
        }
    }
}

----------------------------------

DisplayServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class DisplayServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<h2>Registered Users</h2>");
        out.println("<table border=1>");
        out.println("<tr>");
        out.println("<th>ID</th>");
        out.println("<th>Name</th>");
        out.println("<th>Birthdate</th>");
        out.println("<th>Email</th>");
        out.println("<th>Phone</th>");
        out.println("</tr>");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            Statement st = con.createStatement();

            ResultSet rs = st.executeQuery("SELECT * FROM registration");

            while (rs.next()) {
                out.println("<tr>");
                out.println("<td>" + rs.getInt(1) + "</td>");
                out.println("<td>" + rs.getString(2) + "</td>");
                out.println("<td>" + rs.getString(3) + "</td>");
                out.println("<td>" + rs.getString(4) + "</td>");
                out.println("<td>" + rs.getString(5) + "</td>");
                out.println("</tr>");
            }

            out.println("</table>");
            con.close();

        } catch (Exception e) {
            out.println(e);
        }
    }
}




      `
    },
    {
      id: 4.4,
      question: "4. A Data Driven Servlet Application Develop a data driven servlet application for user authentication. Also display header values of request object and response object.",
      answer: "",
      codeExample: `
✅ ⭐ Full Project Folder Structure

Inside the C:\\tomcat9\\apache-tomcat-9.0.115\\webapps

DataDrivenAuthApp
│
├ login.html
│
├ WEB-INF
│   │
│   ├ classes
│   │   └ AuthServlet.class
│   │
│   └ lib
│       └ mysql-connector-j-9.6.0.jar
│
└ src   (optional - only for storing java files)
    └ AuthServlet.java



Compile your java code file:

    javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" AuthServlet.java

    



✅ STEP 1 — Database Table
⭐ Create Table

Run in MySQL:

CREATE TABLE users (
    username VARCHAR(50),
    password VARCHAR(50)
);

⭐ Insert Sample Data

INSERT INTO users VALUES('raj','raj123');


✅ STEP 2 — Login HTML (login.html)
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>

<h2>User Login</h2>

<form action="AuthServlet" method="post">
    Username: <input type="text" name="uname"><br><br>
    Password: <input type="password" name="pass"><br><br>

    <input type="submit" value="Login">
</form>

</body>
</html>




✅ STEP 3 — ⭐ Main Servlet (AuthServlet.java)

👉 Authentication
👉 Header Display

⭐ AuthServlet.java (FULL WORKING)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.sql.*;
import java.util.*;

@WebServlet("/AuthServlet")
public class AuthServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String uname = request.getParameter("uname");
        String pass = request.getParameter("pass");

        try {

            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // DB Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            // SQL Query
            String sql = "SELECT * FROM users WHERE username=? AND password=?";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, uname);   // username
            ps.setString(2, pass);    // password

            ResultSet rs = ps.executeQuery();

            if(rs.next()) {

                out.println("<h2>Login Successful</h2>");

                //  Request Headers
                out.println("<h3>Request Headers</h3>");

                Enumeration reqHeader = request.getHeaderNames();

                while(reqHeader.hasMoreElements()) {
                    String name = (String) reqHeader.nextElement();
                    out.println(name + " : " + request.getHeader(name) + "<br>");
                }

                //  Response Headers
                out.println("<h3>Response Headers</h3>");

                Collection<String> resHeader = response.getHeaderNames();

                for(String header : resHeader) {
                    out.println(header + " : " + response.getHeader(header) + "<br>");
                }

            } else {
                out.println("<h2>Invalid Username or Password</h2>");
            }

            con.close();

        } catch(Exception e) {
            out.println(e);
        }
    }
}





✅ Final Run

http://localhost:8080/ProjectName/login.html
      `
    },
    {
      id: 5.5,
      question: "5. Servlet - Session Management Develop a servlet application for implementing student grading system. In this system on first page student will enter his data (name, id and department). By clicking on next button he will be redirected to another page. On the second page he will enter marks of all 6 subjects. By clicking on 'Generate result' he will be redirected to next page. On this page all information of student will be displayed along with the result (pass or fail) in appropriate color. Also display the name of student on each page he visits. (Use session management)",
      answer: "",
      codeExample: `
create this folder inside "tomcat/webapps/"


✅ Folder Structure

StudentGradingApp 
├ marks.html
├ student.html
│
├ WEB-INF
│   ├ classes
│   │   ├ StudentServlet.class
│   │   ├ MarksServlet.class
│   │   └ ResultServlet.class
│   │
│   └ lib
│
└ src
    ├ StudentServlet.java
    ├ MarksServlet.java
    └ ResultServlet.java


✅ Compile Command

javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" filename.java


Run project to used this url:

http://localhost:8080/foldername/filename.html


student.html

<!DOCTYPE html>
<html>
<head>
    <title>Student Details</title>
</head>
<body>

<h2>Enter Student Details</h2>

<form action="StudentServlet" method="post">
    Name: <input type="text" name="name"><br><br>
    ID: <input type="text" name="id"><br><br>
    Department: <input type="text" name="dept"><br><br>

    <input type="submit" value="Next">
</form>

</body>
</html>
      


marks.html

<!DOCTYPE html>
<html>
<head>
    <title>Enter Marks</title>
</head>
<body>

<h2>Enter Marks (6 Subjects)</h2>

<form action="MarksServlet" method="post">
    Subject1: <input type="number" name="m1"><br><br>
    Subject2: <input type="number" name="m2"><br><br>
    Subject3: <input type="number" name="m3"><br><br>
    Subject4: <input type="number" name="m4"><br><br>
    Subject5: <input type="number" name="m5"><br><br>
    Subject6: <input type="number" name="m6"><br><br>

    <input type="submit" value="Generate Result">
</form>

</body>
</html>



StudentServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/StudentServlet")
public class StudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        HttpSession session = request.getSession();

        session.setAttribute("name", request.getParameter("name"));
        session.setAttribute("id", request.getParameter("id"));
        session.setAttribute("dept", request.getParameter("dept"));

        response.sendRedirect("marks.html");
    }
}



MarksServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/MarksServlet")
public class MarksServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        HttpSession session = request.getSession();

        session.setAttribute("m1", request.getParameter("m1"));
        session.setAttribute("m2", request.getParameter("m2"));
        session.setAttribute("m3", request.getParameter("m3"));
        session.setAttribute("m4", request.getParameter("m4"));
        session.setAttribute("m5", request.getParameter("m5"));
        session.setAttribute("m6", request.getParameter("m6"));

        response.sendRedirect("ResultServlet");
    }
}



ResultServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/ResultServlet")
public class ResultServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession();

        String name = (String) session.getAttribute("name");
        String id = (String) session.getAttribute("id");
        String dept = (String) session.getAttribute("dept");

        int m1 = Integer.parseInt((String)session.getAttribute("m1"));
        int m2 = Integer.parseInt((String)session.getAttribute("m2"));
        int m3 = Integer.parseInt((String)session.getAttribute("m3"));
        int m4 = Integer.parseInt((String)session.getAttribute("m4"));
        int m5 = Integer.parseInt((String)session.getAttribute("m5"));
        int m6 = Integer.parseInt((String)session.getAttribute("m6"));

        int total = m1 + m2 + m3 + m4 + m5 + m6;
        double avg = total / 6.0;

        boolean pass = (m1>=35 && m2>=35 && m3>=35 && 
                        m4>=35 && m5>=35 && m6>=35);

        out.println("<html><body>");

        out.println("<h2>Welcome " + name + "</h2>");

        out.println("<h3>Student Information</h3>");
        out.println("ID: " + id + "<br>");
        out.println("Department: " + dept + "<br>");
        out.println("Total: " + total + "<br>");
        out.println("Average: " + avg + "<br>");

        if(pass) {
            out.println("<h2 style='color:green'>Result: PASS</h2>");
        } else {
            out.println("<h2 style='color:red'>Result: FAIL</h2>");
        }

        out.println("</body></html>");
    }
}
`
    },
    {
      id: 6.6,
      question: "6. Servlet - Request Redirection  Develop an application for the following: User should be redirected to the URL entered in location text box.",
      answer: "",
      codeExample: `
📁 Folder Structure

RedirectApp
│
├ redirect.html
│
├ WEB-INF
│   ├ classes
│   │   └ RedirectServlet.class
│   │
│   └ lib
│
└ src
    └ RedirectServlet.java


compile the code

javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" RedirectServlet.java



redirect.html

<!DOCTYPE html>
<html>
<head>
    <title>URL Redirect</title>
</head>
<body>

<h2>Enter URL to Redirect</h2>

<form action="RedirectServlet" method="post">
    Enter URL: <input type="text" name="url" size="40">
    <br><br>
    <input type="submit" value="Go">
</form>

</body>
</html>



RedirectServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/RedirectServlet")
public class RedirectServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        String url = request.getParameter("url");

        if(url != null && !url.isEmpty()) {

            // If user does not write http, add it
            if(!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "http://" + url;
            }

            response.sendRedirect(url);
        }
    }
}
      `
    },
    {
      id: 7.7,
      question: "7. JSP - User Authentication Develop a data driven JSP application for user authentication",
      answer: "",
      codeExample: `
✅ Folder Structure
JSPAuthApp
│
├ login.jsp
├ check.jsp
│
└ WEB-INF
    └ lib
        └ mysql-connector-j-9.6.0.jar



✅ STEP 1 — Database Table

Run in MySQL:

CREATE TABLE users (
    username VARCHAR(50),
    password VARCHAR(50)
);

Insert sample data:

INSERT INTO users VALUES('raj','raj123');



login.jsp

<%@ page language="java" %>
<html>
<head>
    <title>Login Page</title>
</head>
<body>

<h2>User Login</h2>

<form action="check.jsp" method="post">
    Username: <input type="text" name="uname"><br><br>
    Password: <input type="password" name="pass"><br><br>

    <input type="submit" value="Login">
</form>

</body>
</html>



check.jsp

<%@ page import="java.sql.*" %>

<html>
<body>

<%
    String uname = request.getParameter("uname");
    String pass = request.getParameter("pass");

    try {

        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/java",
            "root",
            ""
        );

        String sql = "SELECT * FROM users WHERE username=? AND password=?";

        PreparedStatement ps = con.prepareStatement(sql);

        ps.setString(1, uname);
        ps.setString(2, pass);

        ResultSet rs = ps.executeQuery();

        if(rs.next()) {
%>
            <h2 style="color:green">Login Successful</h2>
<%
        } else {
%>
            <h2 style="color:red">Invalid Username or Password</h2>
<%
        }

        con.close();

    } catch(Exception e) {
        out.println(e);
    }
%>

</body>
</html>



✅ How to Run

Place folder inside:

C:\\xampp\\tomcat\\webapps\

Then open:

http://localhost:8080/JSPAuthApp/login.jsp
      `
    },
    {
      id: 8.8,
      question: "8. Practical 8: JSP - Java Beans     Develop an application for Bank Account information using Java Beans. This application will perform various operation on bank account like withdraw, deposit and displaying the information.",
      answer: "",
      codeExample: `

Final Project Structure (Very Important)

DataDrivenBankApp
│
├── index.jsp
│
└── WEB-INF
     ├── web.xml
     └── classes
          └── com
               └── bank
                    ├── BankBean.java
                    └── BankBean.class


Compile and run code:

javac BankBean.java

http://localhost:8080/JSPBankApp/



index.jsp

<%@ page import="com.bank.BankBean" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<jsp:useBean id="bank" class="com.bank.BankBean" scope="session"/>

<html>
<head>
 <title>Bank Account Application</title>
</head>
<body>

<h2>Bank Account Information</h2>

<form method="post">
 Account Holder Name:
 <input type="text" name="name" required><br><br>

 Amount:
 <input type="number" name="amount" step="0.01"><br><br>

 <input type="submit" name="action" value="Deposit">
 <input type="submit" name="action" value="Withdraw">
</form>

<%
 String name = request.getParameter("name");
 String amountStr = request.getParameter("amount");
 String action = request.getParameter("action");

 if (name != null) {
     bank.setAccountHolder(name);
 }

 if (amountStr != null && action != null) {

     double amount = Double.parseDouble(amountStr);

     if (action.equals("Deposit")) {
         bank.deposit(amount);
     }
     else if (action.equals("Withdraw")) {
         bank.withdraw(amount);
     }
 }
%>

<h3>Account Details</h3>

Account Holder: <%= bank.getAccountHolder() %> <br>
Balance: <%= bank.getBalance() %>

</body>
</html>
      


web.xml

<?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
         http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">

    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

</web-app>



BankBean.java

package com.bank;   // package name must match folder structure

import java.io.Serializable;

public class BankBean implements Serializable {

    private String accountHolder;
    private double balance;

    // No-argument constructor (VERY IMPORTANT for JavaBean)
    public BankBean() {
        balance = 0.0;   // initial balance
    }

    // Getter for account holder
    public String getAccountHolder() {
        return accountHolder;
    }

    // Setter for account holder
    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    // Getter for balance
    public double getBalance() {
        return balance;
    }

    // Deposit method
    public void deposit(double amount) {
        if(amount > 0) {
            balance = balance + amount;
        }
    }

    // Withdraw method
    public void withdraw(double amount) {
        if(amount > 0 && amount <= balance) {
            balance = balance - amount;
        }
    }
}
      
                    `
    },
    {
      id: 9,
      question: "9. JSP - Custom Tags   Develop a custom JSP tag which accepts 10 numbers from user and sorts them in specified order.",
      answer: "",
      codeExample: `
Project Folder Structure

Example path:

C:\\xampp\\tomcat\\webapps\\CustomTag9

Folder structure:
    
CustomTag9
│
├── index.jsp
│
└── WEB-INF
     │
     ├── web.xml
     ├── custom.tld
     │
     └── classes
          └── com
               └── custom
                    ├── SortTag.java
                    └── SortTag.class


index.jsp

<%@ page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="WEB-INF/custom.tld" prefix="c" %>

<html>
<body>

<h2>Custom Tag Sorting</h2>

<c:sort numbers="9,5,3,8,1,2"/>

</body>
</html>



web.xml

<web-app>

<welcome-file-list>
<welcome-file>index.jsp</welcome-file>
</welcome-file-list>

</web-app>



custom.tld

<?xml version="1.0" encoding="UTF-8"?>

<taglib>

<tlib-version>1.0</tlib-version>
<jsp-version>2.0</jsp-version>
<short-name>custom</short-name>

<tag>
<name>sort</name>
<tag-class>com.custom.SortTag</tag-class>
<body-content>empty</body-content>

<attribute>
<name>numbers</name>
<required>true</required>
</attribute>

</tag>

</taglib>



SortTag.java

package com.custom;

import java.io.IOException;
import java.util.Arrays;
import java.util.StringTokenizer;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

public class SortTag extends SimpleTagSupport {

    private String numbers;

    public void setNumbers(String numbers){
        this.numbers = numbers;
    }

    public void doTag() throws JspException, IOException {

        JspWriter out = getJspContext().getOut();

        StringTokenizer st = new StringTokenizer(numbers, ",");

        int arr[] = new int[st.countTokens()];

        for(int i=0;i<arr.length;i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(arr);

        out.println("<h3>Sorted Numbers</h3>");

        for(int i=0;i<arr.length;i++){
            out.println(arr[i] + "<br>");
        }
    }
}




✅ Correct Compile Command

Run this inside:

WEB-INF\\classes\\com\\custom
javac -cp "C:\\tomcat9\\apache-tomcat-9.0.115\\lib\\servlet-api.jar;C:\\tomcat9\\apache-tomcat-9.0.115\\lib\\jsp-api.jar" SortTag.java

⚠ Important: On Windows, classpath jars are separated by ;



🚀 Then run project

Start Tomcat and open:

http://localhost:8080/CustomTag9



Output should be:

Sorted Numbers
1
2
3
5
8
9




---------------------------------------------------------


🎯 Why .tld is Used

Without a .tld file, JSP cannot understand your custom tag.
It acts like a configuration file connecting JSP tags to Java classes.


Example flow:

JSP Page
   ↓
Custom Tag (<c:sort>)
   ↓
custom.tld
   ↓
Java Class (SortTag.java)
   ↓
Execution


📌 Example

1️⃣ JSP Page

<%@ taglib uri="WEB-INF/custom.tld" prefix="c" %>

<c:sort numbers="9,5,3,8,1"/>


Here:

c → tag prefix
sort → custom tag


2️⃣ TLD File

<tag>
    <name>sort</name>
    <tag-class>com.custom.SortTag</tag-class>

    <attribute>
        <name>numbers</name>
        <required>true</required>
    </attribute>

</tag>


This tells JSP:

    Tag name = sort
    Java class = SortTag
    Attribute = numbers


📌 Where .tld File is Stored

Usually inside:
    WEB-INF/

Example:
    WEB-INF/custom.tld

📌 Advantages of TLD

✔ Allows creating reusable tags
✔ Makes JSP cleaner and easier to read
✔ Separates Java logic from HTML
✔ Similar to built-in JSTL tags


🧠 Simple One-Line Exam Answer

A .tld (Tag Library Descriptor) file is an XML file used in JSP to define custom tags and map them to 
their corresponding Java classes.
      `
    },
    {
      id: 10.10,
      question: "10. JSP - Application Context  Develop an application that will allow maximum 3 users to access the application. If number of users exceeds than limit then user will be redirected to the error page.",
      answer: "",
      codeExample: `
Project Folder Structure

Create project inside Tomcat webapps.

Example:

    C:\\tomcat9\\apache-tomcat-9.0.115\\webapps\\UserLimitApp

Structure:
    
UserLimitApp
│
├── index.jsp
├── error.jsp
│
└── WEB-INF
     └── web.xml



index.jsp

<%@ page contentType="text/html;charset=UTF-8" %>

<%
Integer count = (Integer)application.getAttribute("userCount");

if(count == null){
    count = 0;
}

count++;

application.setAttribute("userCount", count);

if(count > 3){
    response.sendRedirect("error.jsp");
    return;
}
%>

<html>
<body>

<h2>Welcome to the Application</h2>

<p>Current Users: <%= count %></p>

</body>
</html>



error.jsp

<html>
<body>

<h2 style="color:red;">Maximum User Limit Reached!</h2>

<p>Only 3 users can access the application at a time.</p>

</body>
</html>



web.xml

<web-app>

<welcome-file-list>
<welcome-file>index.jsp</welcome-file>
</welcome-file-list>

</web-app>


OUTPUT:

Welcome to the Application
Current Users: 1

Welcome to the Application
Current Users: 2

Welcome to the Application
Current Users: 3

Maximum User Limit Reached!
Only 3 users can access the application at a time.




Run program:

Open Browser:

http://localhost:8080/UserLimitApp
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
              className={`question-button $ {activeId === q.id ? 'active' : ''}`}
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
