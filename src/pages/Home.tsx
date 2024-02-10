import React, { useEffect, useState } from "react"
import { money } from "../assets"
import { CustomButton, DisplayCampaigns } from "../components"
import { checkIfImage } from "../utils"
import { useNavigate } from "react-router-dom"
import { ethers } from "ethers"
import { useStateContext } from "../context"

const Home = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [campaigns, setCampaigns] = useState<Campaign[]>([])

  const { address, contract, getCampaigns }: any = useStateContext()

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getCampaigns()
    setCampaigns(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if (contract) {
      fetchCampaigns()
    }
  }, [address, contract])

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    >
    </DisplayCampaigns>
  )
}

export default Home
