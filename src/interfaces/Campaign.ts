interface Campaign {
    pId?: number
    name?: string
    title: string
    description: string
    target: string
    deadline: string
    image: string
    owner?: string
    amountCollected?: string
    handleClick?: () => void
}
