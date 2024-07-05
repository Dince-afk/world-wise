import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="There are no countries yet..." />;

  const countries = cities.reduce((acc, cur) => {
    // (country) => country.countryName === cur.country

    const countryExists = acc
      .map((city) => city.countryName)
      .includes(cur.country);
    if (!countryExists) {
      acc.push({ countryName: cur.country, emoji: cur.emoji, id: cur.id });
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem key={country.id} country={country} />;
      })}
    </ul>
  );
}

export default CountryList;
