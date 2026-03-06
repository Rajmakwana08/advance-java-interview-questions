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
