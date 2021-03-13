import { useState, useEffect } from "react";
import Header from "./components/Header";
import TableList from "./components/TableList";
import secureAxios from "./config/secureAxios";
import "./App.css";
import InfoStats from "./components/InfoStats";
import { Card, CardContent } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    secureAxios("/countries")
      .then((res) => res.data)
      .then((data) => {
        const countriesData = data.map((country) => {
          return {
            name: country.country,
            value: country.countryInfo.iso2,
          };
        });

        const sortedData = [...data];
        sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
        setCountries(countriesData);
        setTableData(sortedData);
      });
  }, []);

  useEffect(() => {
    secureAxios
      .get("/all")
      .then((res) => res.data)
      .then((data) => setCountryInfo(data));
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      country === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `/countries/${countryCode}`;
    await secureAxios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  return (
    <div className="app">
      <div className="app__left">
        <Header
          countries={countries}
          onCountryChange={onCountryChange}
          country={country}
        />

        <div className="app__stats">
          <InfoStats
            title="Coronavirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoStats
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoStats
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
      </div>
      <Card className="app__right">
        <CardContent>
          <TableList countries={tableData} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
