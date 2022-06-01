export type Erc1155Token = {
    id: string, 
    uri: string,
    totalSupply?: number,
	account?: string,
	value?: number,
	valueExact?: number
}

export type TokenDetail = {
    id: string,
    identifier: number,
    decimalPlaces: number,
    description: string,
    image: string, 
    name: string,
    properties: TokenDetailProperties
}

export type TokenDetailProperties = {
    category: string,
    game: string, 
    rarity: TokenDetailRarity,
    tokenRun: string
}

export type TokenDetailRarity = {
    hexcode: string,
    icon: string,
    label: string,
    supplyLimit: number,
}

export type Erc1155Balance = {
	account: string,
	value: number,
	valueExact: number,
    token: Erc1155Token
}