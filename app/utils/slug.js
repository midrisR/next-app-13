export function generateSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Ganti spasi dengan -
    .replace(/[^\w\-]+/g, "") // Hapus karakter khusus
    .replace(/\-\-+/g, "-"); // Ganti multiple - jadi satu
}
