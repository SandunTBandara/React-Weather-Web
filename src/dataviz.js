// anychart.onDocumentReady(async function () {
//   async function getWeatherData() {
//     try {
//       const response = await fetch("http://localhost:3000/api/current_weather");
//       if (!response.ok) {
//         throw new Error(`Error fetching weather data: ${response.status}`);
//       }
//       const weatherData = await response.json();
//       return weatherData;
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//
//       return null;
//     }
//   }
//
//   const map = anychart.map();
//   map.geoData(anychart.maps.sri_lanka);
//   map.title("Sri Lanka Weather");
//
//   let weatherData = null;
//
//   async function updateMapData() {
//     weatherData = await getWeatherData();
//     if (weatherData) {
//       const series = map.choropleth(weatherData);
//       series.tooltip().format(function (e) {
//         return (
//           "City: " +
//           e.getData("location") +
//           "\n" +
//           "Temperature: " +
//           e.getData("temperature") +
//           "\n" +
//           "Humidity: " +
//           e.getData("humidity") +
//           "\n" +
//           "Air Pressure: " +
//           e.getData("air_pressure")
//         );
//       });
//       series.labels(false);
//       map.container("container");
//       map.draw();
//     } else {
//       console.warn("Unable to update map data. Check data source or error handling.");
//     }
//   }
//
//   updateMapData();
//   // location.reload();
//
//   const intervalId = setInterval(updateMapData, 5 * 60 * 1000);
//
// });

// /src/data.json

anychart.onDocumentReady(async function () {
    async function getWeatherData() {
        try {
            const response = await fetch(`http://api.sandun.site/api/current_weather`, {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.status}`);
            }
            const weatherData = await response.json();
            return weatherData;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            return null;
        }
    }

    const map = anychart.map();
    map.geoData(anychart.maps.sri_lanka);
    map.title("Real Time Sri Lankan Weather data");

    let series = null; // Store reference to the series for updating

    async function updateMapData() {
        const weatherData = await getWeatherData();
        if (weatherData) {
            try {
                // Clear existing series
                if (series) {
                    map.removeSeries(series);
                }

                // Create new series with updated data
                series = map.choropleth(weatherData);
                series.tooltip().format(function (e) {
                    return (
                        "City: " +
                        e.getData("location") +
                        "\n" +
                        "Temperature: " +
                        e.getData("temperature") +
                        "\n" +
                        "Humidity: " +
                        e.getData("humidity") +
                        "\n" +
                        "Air Pressure: " +
                        e.getData("air_pressure")
                    );
                });
                series.labels(false);

                // Redraw the map
                map.container("container");
                map.draw();

                // Refresh the entire browser every 1 minute
                setTimeout(() => {
                    location.reload();
                }, 5 * 60 * 1000);
            } catch (error) {
                console.error("Error updating map data:", error);
            }
        } else {
            console.warn("Unable to update map data. Check data source or error handling.");
        }
    }

    updateMapData();
});

// anychart.onDocumentReady(async function () {
//     async function getWeatherData() {
//         try {
//             const response = await fetch(`http://localhost:3000/api/current_weather?timestamp=${Date.now()}`, {
//                 headers: {
//                     'Cache-Control': 'no-cache'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error(`Error fetching weather data: ${response.status}`);
//             }
//             const weatherData = await response.json();
//             return weatherData;
//         } catch (error) {
//             console.error("Error fetching weather data:", error);
//             return null;
//         }
//     }
//
//     const map = anychart.map();
//     map.geoData(anychart.maps.sri_lanka);
//     map.title("Sri Lanka Weather");
//
//     let series = null; // Store reference to the series for updating
//
//     async function updateMapData() {
//         const weatherData = await getWeatherData();
//         if (weatherData) {
//             try {
//                 // Clear existing series
//                 if (series) {
//                     map.removeSeries(series);
//                 }
//
//                 // Create new series with updated data
//                 series = map.choropleth(weatherData);
//                 series.tooltip().format(function (e) {
//                     return (
//                         "City: " +
//                         e.getData("location") +
//                         "\n" +
//                         "Temperature: " +
//                         e.getData("temperature") +
//                         "\n" +
//                         "Humidity: " +
//                         e.getData("humidity") +
//                         "\n" +
//                         "Air Pressure: " +
//                         e.getData("air_pressure")
//                     );
//                 });
//                 series.labels(false);
//
//                 // Redraw the map
//                 map.container("container");
//                 map.draw();
//             } catch (error) {
//                 console.error("Error updating map data:", error);
//             }
//         } else {
//             console.warn("Unable to update map data. Check data source or error handling.");
//         }
//     }
//
//     // Update map data initially
//     updateMapData();
//
//     // Update map data every 1 minute
//     setInterval(updateMapData, 1 * 60 * 1000);
// });


