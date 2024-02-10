import React, { useEffect, useState } from "react"
import { money } from "../assets"
import { CustomButton, DisplayCampaigns } from "../components"
import { checkIfImage } from "../utils"
import { useNavigate } from "react-router-dom"
import { ethers } from "ethers"
import { useStateContext } from "../context"

const Profile = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [campaigns, setCampaigns] = useState<Campaign[]>([])

  const { address, contract, getUserCampaigns }: any = useStateContext()

  const fetchUserCampaigns = async () => {
    setIsLoading(true)
    const data = await getUserCampaigns()
    setCampaigns(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if (contract) {
      fetchUserCampaigns()
    }
  }, [address, contract])

  return (
    <DisplayCampaigns
      title="My Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Profile
