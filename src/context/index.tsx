import {
  useAddress,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react"
import { ethers } from "ethers"
import { createContext, useContext } from "react"

const StateContext = createContext({})

export const StateContextProvider = ({ children }: any): any => {
  const { contract } = useContract("0x8b31458a1791f5CdEe5A65a5eB5cd99Ce101Af6d")
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  )

  // const { data: getCampaigns } = useContractRead(contract, "getCampaigns")

  const address: string | undefined = useAddress()
  const connect: any = useConnect()

  const publishCampaign = async (form: Campaign) => {
    try {
      const data = await createCampaign({
        args: [
          address,
          form.title,
          form.description,
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      })
      console.log("Contract call success!", data)
    } catch (error) {
      console.log("Contract call failuer!", error)
    }
  }

  const getCampaigns = async (): Promise<Campaign[] | undefined> => {
    try {
      const campaigns = await contract?.call("getCampaigns")

      const parsedCampaings: Campaign[] | undefined = campaigns.map(
        (campaign: any, i: number): Campaign => ({
          owner: campaign.owner,
          title: campaign.title,
          description: campaign.description,
          target: ethers.utils.formatEther(campaign.target.toString()),
          deadline: campaign.deadline.toNumber(),
          amountCollected: ethers.utils.formatEther(
            campaign.amountCollected.toString()
          ),
          image: campaign.image,
          pId: i,
        })
      )

      return parsedCampaings
    } catch (error) {
      console.log("Contract call failuer!", error)
    }
  }

  const getUserCampaigns = async (): Promise<Campaign[] | undefined> => {
    const allCampaigns = await getCampaigns()

    return allCampaigns?.filter((campaign) => campaign.owner === address)
  }

  const donate = async (pId: number, amount: string) => {
    const data = await contract?.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(amount),
    })

    return data
  }

  const getDonations = async (pId: number) => {
    const donations = await contract?.call("getDonators", [pId])
    const numberOfDonations = donations[0].length

    const parsedDonations: { donator: string; donation: string }[] = []

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      })
    }

    return parsedDonations
  }

  const values = {
    address,
    contract,
    connect,
    createCampaign: publishCampaign,
    getCampaigns,
    getUserCampaigns,
    donate,
    getDonations,
  }

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
