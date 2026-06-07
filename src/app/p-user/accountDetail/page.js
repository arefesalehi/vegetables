import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import UserPanelAlert from '@/components/modules/p-user/UserPanelAlert'
import AccountDetail from '@/components/templates/p-user/AccountDetail'
import { authUser } from '@/utils/serverHelpers'
import { IoAlert } from 'react-icons/io5'

const page =async () => {
  const user= await authUser()

  return (
    <>
    <UserPanelLayout>
    <UserPanelAlert
        icon={<IoAlert className="text-white" />}
        title=" حساب کاربری من "

      />

      <AccountDetail  user={JSON.parse(JSON.stringify(user))} />

    </UserPanelLayout>


    </>
  )
}

export default page