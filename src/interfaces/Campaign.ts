interface Campaign {
    pId?: number
    name?: string
    title: string
    description: string
    target: string
    deadline: string | number
    image: string
    owner?: string
    amountCollected?: string
    handleClick?: () => void
}