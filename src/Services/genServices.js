import instance from "../Config/axios";
export function getAll() {
  return instance.get("/api/mutant/all");
}
export function getByID(id) {
  return instance.get("/api/mutant/" + id);
}
export function altaGen(dna) {
  console.log("Payload enviado al backend:", dna);
  return instance.post("/api/mutant", {
    dna: dna
    });
}
export function getStats() {
    return instance.get("/api/mutant/stats");
}