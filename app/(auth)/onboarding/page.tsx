import AccountProfile from '@/components/forms/AccountProfile';

import { currentUser, User } from '@clerk/nextjs/server';

async function Page() {
  const user: User | null = await currentUser();

  const userInfo: any = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    fullName: userInfo?.name || user?.fullName,
    bio: userInfo?.bio || '',
    imageUrl: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20 bg-dark-1'>
      <h1 className='head-text'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-light-2'>
        Complete your profile now to use Threads
      </p>

      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;
