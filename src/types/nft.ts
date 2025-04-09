type NewNftFormValues = {
    name: string;
    symbol: string;
    description: string;
    collection: string;
    sellerBasisPoints: number;
};

type AttributeFromValues = {
    key1: string;
    value1: string;
    key2: string;
    value2: string;
    key3: string;
    value3: string;
    key4: string;
    value4: string;
    key5: string;
    value5: string;
    key6: string;
    value6: string;
};

export type CreateNftFormValues = {
    newNft: NewNftFormValues;
    attribute: AttributeFromValues;
};