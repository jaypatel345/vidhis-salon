/**
 * IMAGE LIBRARY
 * ------------------------------------------------------------------
 * Curated photographic imagery from Unsplash (verified reachable).
 * The helper builds a sized, quality-tuned delivery URL.
 *
 * NOTE: These editorial/stock photographs illustrate the salon's
 * aesthetic. They do not document real, specific client results.
 */

const BASE = "https://images.unsplash.com/";

/** Build an Unsplash delivery URL with sizing + format tuning. */
export function unsplash(
  id: string,
  opts: { w?: number; h?: number; q?: number } = {}
): string {
  const { w = 1600, q = 75, h } = opts;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `${BASE}${id}?${params.toString()}`;
}

/** Raw verified photo IDs grouped by theme. */
export const photo = {
  heroStyled: "photo-1560066984-138dadb4c035",
  colorStation: "photo-1522337660859-02fbefca4702",
  glossyWaves: "photo-1595476108010-b4d1f102b1b1",
  blowoutMotion: "photo-1562322140-8baeececf3df",
  salonChairs: "photo-1521590832167-7bcbfaa6381f",
  blondeHighlights: "photo-1503951914875-452162b0f3f1",
  stylistWorking: "photo-1580618672591-eb180b1a973f",
  balayage: "photo-1599351431202-1e0f0137899a",
  productShelf: "photo-1527799820374-dcf8d9d4a388",
  washStation: "photo-1605497788044-5a32c7078486",
  brunetteGloss: "photo-1620331311520-246422fd82f9",
  curlTexture: "photo-1633681926022-84c23e8cb2d6",
  portraitRed: "photo-1519699047748-de8e457a634e",
  updo: "photo-1492106087820-71f1a00d2b11",
  bridalUpdo: "photo-1522338242992-e1a54906a8da",
  womanProfile: "photo-1515377905703-c4788e51af15",
  longWaves: "photo-1457972729786-0411a3b2b626",
  womanField: "photo-1470259078422-826894b933aa",
  cutting: "photo-1526045478516-99145907023c",
  salonInterior: "photo-1600948836101-f9ffda59d250",
  blondePortrait: "photo-1512690459411-b9245aed614b",
  interiorWarm: "photo-1600334129128-685c5582fd35",
  stylistPortrait1: "photo-1559599101-f09722fb4948",
  menCut: "photo-1583001931096-959e9a1a6223",
  menGroom: "photo-1522383225653-ed111181a951",
  smilingWoman: "photo-1487412947147-5cebf100ffc2",
  copperColor: "photo-1604654894610-df63bc536371",
  mirrorStation: "photo-1588681664899-f142ff2dc9b1",
  stylistPortrait2: "photo-1535585209827-a15fcdbc4c2d",
  stylistPortrait3: "photo-1570172619644-dfd03ed5d881",
  treatmentCare: "photo-1534349762230-e0cadf78f5da",
  productsFlat: "photo-1554519515-242161756769",
} as const;

/** The photo-ID string values (e.g. "photo-1560066984-138dadb4c035"). */
export type PhotoKey = (typeof photo)[keyof typeof photo];
