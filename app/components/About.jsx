// import weatherImg from "/images/Weather02.jpg";

var React = require('react');

// var About = React.createClass({

//     render: function(){

//         return(
//             <h2>About Component</h2>
//         )

//     }

// });

var About = (props) => {
    return (
    <div>
        <h1 className="text-center">About</h1>
        <div className="card">
            <div className="card-divider">About React Weather</div>
            <div className="card-image">
                <img src="./images/Weather02.jpg" alt="Weather Logo" />
            </div>
            <div className="card-section">
                <h4>Purpose</h4>
                <p>
                    The purpose of React Weather is to provide you with easy access to the weather in your area, or any other area on the Globe!
                </p>
                <p>
                    Here are some of the tools that I used:
                </p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
                    </li>
                    <li><a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.

                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
};

module.exports = About;