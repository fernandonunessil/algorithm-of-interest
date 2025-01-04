import { Tag, tags } from "../variables/tags";

export interface TopThree {
  idTag: number;
  amount: number;
}

const calcRepeatIdTags = <T extends string | number | symbol>(
  actualTags: T[]
) => {
  return actualTags.reduce((acc, item) => {
    acc[item] = ((acc[item] as unknown as number) || 0) + 1;
    return acc;
  }, {} as { [key in T]: number });
};

const calcTopThreeTags = <
  T extends string | number | symbol
>(amountOfInterestIdTag: { [key in T]: number }) => {
  return Object.entries(amountOfInterestIdTag) // Converte o objeto em um array de pares [chave, valor]
    .sort(([, valueA], [, valueB]) => (valueB as number) - (valueA as number)) // Ordena pelo valor (decrescente)
    .slice(0, 3) // Pega os 3 primeiros
    .map(([key, value]) => ({ idTag: Number(key), amount: value as number }));
};

const getTagInfoWithId = (topThree: TopThree[]) => {
  return topThree
    .map((row) => {
      const tagData = tags.find(({ id }) => id === row.idTag);
      return tagData ? tagData : null;
    })
    .filter(Boolean) as Tag[];
};

export const handleInterestsUser = () => {
  const actualTags = sessionStorage.getItem("videoTags");

  if (actualTags !== null) {
    try {
      const amountOfInterestIdTag = calcRepeatIdTags(JSON.parse(actualTags));
      const topThree = calcTopThreeTags(amountOfInterestIdTag);
      const interests = getTagInfoWithId(topThree);

      if (interests && interests.length > 0) {
        return interests;
      }
    } catch (error) {
      console.error("Error processing video tags:", error);
    }
  }

  return [];
};
