import React from "react";
import { Layout } from "./layout/Layout";
import { AbsenceList } from "./components/Absences/AbsenceList";
import { AbsenceAddForm } from "./components/Absences/AbsenceAddForm";
import { useModalStore } from "./store/useModalStore";
import { Toaster } from 'react-hot-toast';


export const App: React.FC = () => {
  const isAbsenceModalOpen = useModalStore((state) => state.isAbsenceModalOpen);
  return (
    <>
    <Layout>
      <AbsenceList />
      {isAbsenceModalOpen && <AbsenceAddForm />}
    </Layout>
    <Toaster/>
    </>
  );
};
