import { ConnectedAccounts, DangerZone, Header, Notifications, Profile, Security } from "../components";

export const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Settings" />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
		<DangerZone />
      </main>
    </div>
  );
};
