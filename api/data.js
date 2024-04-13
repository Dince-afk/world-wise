import cities from "../src/data/cities.json";
console.log(cities);
export function GET(request) {
  return new Response(cities);
}
