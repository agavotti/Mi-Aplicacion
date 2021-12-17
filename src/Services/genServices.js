import instance from "../Config/axios";
export function getAll() {
  return instance.get("all");
}
export function getByID(id) {
  return instance.get("mutant/" + id);
}
export function altaGen(dna) {
  return instance.post("mutant", dna);
}
export function getStats() {
    return instance.get("/stats");
    // return fetch("https://cerebroxmenapi.azurewebsites.net/stats",{
    //     method:"GET",
    //     mode:"no-cors",
    // })
    // .then(res=>res.json());
}