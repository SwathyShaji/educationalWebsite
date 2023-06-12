// import React from 'react';

// export const CoursesPage = () => {
//   const courses = [
//     {
//       title: 'Artificial Intelligence Engineer with Data Science',
//       duration: '5 Months',
//       startingDate: '10th of Every Month',
//       description:
//         'Python, Django, Web application concepts, Matplotlib, Seaborn, Bokhe, Numpy, Pandas, Scipy, Scikit, Git, Linux Shell Scripts and Commands',
//     },
//     {
//       title: 'Big Data Analytics Implementation Expert (Hadoop, Spark, Cloud Computing)',
//       duration: '5 to 6 Months',
//       startingDate: '15th of Every Month',
//       description:
//         'Hadoop and Friends: Java/Python/Scala, Apache Hadoop, HDFS, Map Reduce, SQL, MySQL, Data Ware House, HBase, Pig, Hive, Oozie, Sqoop, Flume, Zookeeper, Junit/unittest, Git, PIP/Maven, Linux Commands and Shell Scripts',
//     },{
//       title: 'Big Data Product Development Expert',
//       duration: '8 Months',
//       startingDate: '15th of Every Month',
//       description:
//         'Hadoop and Friends: Java,  Dimensions and Facts, Git, Maven, Linux Commands and Shell Scripts :(2 Months)\n\nSpark Machine Learning: Python, PySpark, Apache Spark, Spark-SQL, Spark-Streaming, Spark-MLib, Machine Learning, Regressions (Linear, Multi-Linear, Logistic), Clustering, K-Mean, KNN, NaiveBayes, Classification, Decision Trees, Random Forest, Spark-GraphX, Zookeeper : (2 Months)\n\nSpring Microservices: Kafka, Akka, Spring Framework, Spring Boot, Spring MVC,Project: (2 Months)',
//       price: '$299',
//     },
//   ];

//   const handlePurchase = (courseTitle) => {
//     // Implement the purchase logic here
//     console.log(`Purchased: ${courseTitle}`);
//   };

//   return (
//     <div>
//       <h2>Courses</h2>
//       {courses.map((course, index) => (
//         <div key={index} className="card">
//           <div className="card-body">
//             <h5 className="card-title">{course.title}</h5>
//             <p className="card-text">{course.description}</p>
//             <p className="card-text">
//               Duration: {course.duration} | Starting From: {course.startingDate}
//             </p>
//             <button
//               className="btn btn-primary"
//               onClick={() => handlePurchase(course.title)}
//             >
//               Purchase
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CoursesPage;
// import React, { useState } from 'react';

// export const CoursesPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const courses = [
//     {
//       title: 'Artificial Intelligence Engineer with Data Science',
//       duration: '5 Months',
//       startingDate: '10th of Every Month',
//       description:
//         'Python, Django, Web application concepts, Matplotlib, Seaborn, Bokhe, Numpy, Pandas, Scipy, Scikit, Git, Linux Shell Scripts and Commands',
//       price: 499,
//     },
//     {
//       title: 'Big Data Analytics Implementation Expert (Hadoop, Spark, Cloud Computing)',
//       duration: '5 to 6 Months',
//       startingDate: '15th of Every Month',
//       description:
//         'Hadoop and Friends: Java/Python/Scala, Apache Hadoop, HDFS, Map Reduce, SQL, MySQL, Data Ware House, HBase, Pig, Hive, Oozie, Sqoop, Flume, Zookeeper, Junit/unittest, Git, PIP/Maven, Linux Commands and Shell Scripts',
//       price: 599,
//     },
//     {
//       title: 'Big Data Product Development Expert',
//       duration: '8 Months',
//       startingDate: '15th of Every Month',
//       description:
//         'Hadoop and Friends: Java,  Dimensions and Facts, Git, Maven, Linux Commands and Shell Scripts :(2 Months)\n\nSpark Machine Learning: Python, PySpark, Apache Spark, Spark-SQL, Spark-Streaming, Spark-MLib, Machine Learning, Regressions (Linear, Multi-Linear, Logistic), Clustering, K-Mean, KNN, NaiveBayes, Classification, Decision Trees, Random Forest, Spark-GraphX, Zookeeper : (2 Months)\n\nSpring Microservices: Kafka, Akka, Spring Framework, Spring Boot, Spring MVC,Project: (2 Months)',
//       price: 699,
//     },
//   ];

//   const handlePurchase = (course) => {
//     const courseInCart = cartItems.find((item) => item.title === course.title);

//     if (courseInCart) {
//       const updatedCart = cartItems.map((item) =>
//         item.title === course.title ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([...cartItems, { ...course, quantity: 1 }]);
//     }
//   };

//   const calculateTotalAmount = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div>
//       <div className="cart-container">
//         <button className="cart-button" onClick={toggleCart}>
//           Cart ({cartItems.length}) - Total: ${calculateTotalAmount()}
//         </button>
//         {showCart && (
//           <div className="cart-modal">
//             <h3>Cart</h3>
//             {cartItems.map((item, index) => (
//               <div key={index}>
//                 <p>{item.title}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: ${item.price}</p>
//               </div>
//             ))}
//             <p>Total: ${calculateTotalAmount()}</p>
//           </div>
//         )}
//       </div>
//       <h2>Courses</h2>
//       <div className="course-list">
//         {courses.map((course, index) => (
//           <div key={index} className="card">
//             <div className="card-body">
//               <h5 className="card-title">{course.title}</h5>
//               <p className="card-text">{course.description}</p>
//               <p className="card-text">
//                 Duration: {course.duration} | Starting From: {course.startingDate}
//               </p>
//               <p className="card-text">Price: ${course.price}</p>
//               <button className="btn btn-primary" onClick={() => handlePurchase(course)}>
//                 Purchase
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';

export const CoursesPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const courses = [
    {
      title: 'Artificial Intelligence Engineer with Data Science',
      duration: '5 Months',
      startingDate: '10th of Every Month',
      description:
        'Python, Django, Web application concepts, Matplotlib, Seaborn, Bokhe, Numpy, Pandas, Scipy, Scikit, Git, Linux Shell Scripts and Commands',
      price: 499,
      image: 'https://www.expertzlab.com/images/artificial-intelligence-training-kochi.webp',
    },
    {
      title: 'Big Data Analytics Implementation Expert (Hadoop, Spark, Cloud Computing)',
      duration: '5 to 6 Months',
      startingDate: '15th of Every Month',
      description:
        'Hadoop and Friends: Java/Python/Scala, Apache Hadoop, HDFS, Map Reduce, SQL, MySQL, Data Ware House, HBase, Pig, Hive, Oozie, Sqoop, Flume, Zookeeper, Junit/unittest, Git, PIP/Maven, Linux Commands and Shell Scripts',
      price: 599,
      image: 'https://www.expertzlab.com/images/big-data-training-kochi.webp',
    },
    {
      title: 'Big Data Product Development Expert',
      duration: '8 Months',
      startingDate: '15th of Every Month',
      description:
        'Hadoop and Friends: Java,  Dimensions and Facts, Git, Maven, Linux Commands and Shell Scripts :(2 Months)\n\nSpark Machine Learning: Python, PySpark, Apache Spark, Spark-SQL, Spark-Streaming, Spark-MLib, Machine Learning, Regressions (Linear, Multi-Linear, Logistic), Clustering, K-Mean, KNN, NaiveBayes, Classification, Decision Trees, Random Forest, Spark-GraphX, Zookeeper : (2 Months)\n\nSpring Microservices: Kafka, Akka, Spring Framework, Spring Boot, Spring MVC,Project: (2 Months)',
      price: 699,
      image: 'https://www.expertzlab.com/images/big-data-engineer-training-kochi.webp',
    },
  ];

  const handlePurchase = (course) => {
    const courseInCart = cartItems.find((item) => item.title === course.title);

    if (courseInCart) {
      const updatedCart = cartItems.map((item) =>
        item.title === course.title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...course, quantity: 1 }]);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const convertToRupees = (dollars) => {
    const exchangeRate = 75; // Assuming 1 dollar = 75 Indian rupees
    return dollars * exchangeRate;
  };

  return (
    <div>
      <div className="cart-container">
        <button className="cart-button" onClick={toggleCart}>
          Cart ({cartItems.length}) - Total: ₹{convertToRupees(calculateTotalAmount())}
        </button>
        {showCart && (
          <div className="cart-modal">
            <h3>Cart</h3>
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{convertToRupees(item.price)}</p>
              </div>
            ))}
            <p>Total: ₹{convertToRupees(calculateTotalAmount())}</p>
          </div>
        )}
      </div>
      <h2>Courses</h2>
      <div className="course-list course-list-horizontal-scroll">
  {courses.map((course, index) => (
    <div key={index} className="card card-small">
    
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Duration: {course.duration}</p>
        <p className="card-text">Starting From: {course.startingDate}</p>
        <p className="card-text">Price: ₹{convertToRupees(course.price)}</p>
        <p className="card-text">{course.description}</p>
        <button className="btn btn-primary" onClick={() => handlePurchase(course)}>
          Purchase
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};
