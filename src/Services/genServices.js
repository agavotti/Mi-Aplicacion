import instance from "../Config/axios";
export function getAll() {
  return instance.get("all");
}
export function getByID(id) {
  return instance.get("Genes/" + id);
}

export function getStats() {
    return instance.get("/stats");
    // return fetch("https://cerebroxmenapi.azurewebsites.net/stats",{
    //     method:"GET",
    //     mode:"no-cors",
    // })
    // .then(res=>res.json());
}