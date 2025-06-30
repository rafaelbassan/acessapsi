"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface RegisterFormInputs {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  professionalArea: string;
  specificSpecialty: string;
  registrationNumber: string;
  council: string;
  uf: string;
  bio?: string;
}

const PROFESSIONAL_AREAS = [
  "Médico",
  "Psicólogo",
  "Psiquiatra",
  "Fisioterapeuta",
  "Terapeuta Ocupacional",
  "Outro"
];

const COUNCILS = ["CRM", "CRP", "CRO", "CREFITO", "Outro"];
const UFS = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

const accordionTriggerClass =
  "flex w-full items-center justify-between px-6 py-4 font-semibold text-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transition rounded-t focus:outline-none focus:ring-2 focus:ring-blue-400 group";
const accordionContentClass =
  "px-6 pb-6 pt-2 bg-white rounded-b shadow transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up";
const accordionItemClass =
  "mb-4 border border-blue-200 rounded-lg overflow-hidden shadow-sm";

const inputClass =
  "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-base bg-gray-50";
const labelClass = "block text-sm font-medium mb-1 text-gray-700";
const errorClass = "text-red-500 text-xs flex items-center gap-1 mt-1";
const successClass = "text-green-600 text-sm flex items-center gap-1 justify-center mb-2";

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<RegisterFormInputs>();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormInputs) => {
    setError(null);
    setSuccess(null);
    try {
      if (data.password !== data.confirmPassword) {
        setError("As senhas não coincidem.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      await user.getIdToken();
      await setDoc(doc(db, "professionals", user.uid), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        professionalArea: data.professionalArea,
        specificSpecialty: data.specificSpecialty,
        registrationNumber: data.registrationNumber,
        council: data.council,
        uf: data.uf,
        bio: data.bio || "",
        status: "pendente",
        createdAt: Timestamp.now(),
        role: "profissional"
      });
      setSuccess("Cadastro realizado com sucesso!");
      reset();
    } catch (e: any) {
      console.error("Erro ao registrar profissional:", e);
      setError(e.message || "Erro ao registrar profissional.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-blue-50 to-blue-100 z-0" aria-hidden="true" />
      <div className="relative min-h-screen flex items-center justify-center z-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 md:p-12 lg:p-16 rounded-2xl shadow-xl w-full max-w-lg md:max-w-2xl lg:max-w-3xl border border-blue-100 flex flex-col justify-center"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-blue-800 drop-shadow">Registro de Profissional</h1>
          <Accordion.Root type="single" collapsible defaultValue="personal" className="w-full">
            {/* Dados Pessoais */}
            <Accordion.Item value="personal" className={accordionItemClass + " md:mb-6"}>
              <Accordion.Header>
                <Accordion.Trigger className={accordionTriggerClass + " md:text-xl md:px-8 md:py-5"}>
                  <span>Dados Pessoais</span>
                  <ChevronDown className="h-5 w-5 ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={accordionContentClass + " md:px-8 md:pb-8 md:pt-4"}>
                <div className="mb-4">
                  <label htmlFor="fullName" className={labelClass}>Nome completo</label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName", { required: "Nome completo é obrigatório" })}
                    className={inputClass + " md:text-lg md:py-3"}
                    autoComplete="name"
                  />
                  {errors.fullName && <span className={errorClass}><AlertCircle size={14}/>{errors.fullName.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email é obrigatório" })}
                    className={inputClass + " md:text-lg md:py-3"}
                    autoComplete="email"
                  />
                  {errors.email && <span className={errorClass}><AlertCircle size={14}/>{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className={labelClass}>Telefone</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: "Telefone é obrigatório" })}
                    className={inputClass + " md:text-lg md:py-3"}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className={errorClass}><AlertCircle size={14}/>{errors.phone.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className={labelClass}>Senha</label>
                  <input
                    id="password"
                    type="password"
                    {...register("password", { required: "Senha é obrigatória", minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres" } })}
                    className={inputClass + " md:text-lg md:py-3"}
                    autoComplete="new-password"
                  />
                  {errors.password && <span className={errorClass}><AlertCircle size={14}/>{errors.password.message}</span>}
                </div>
                <div className="mb-2">
                  <label htmlFor="confirmPassword" className={labelClass}>Confirme a senha</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword", { required: "Confirmação de senha é obrigatória" })}
                    className={inputClass + " md:text-lg md:py-3"}
                    autoComplete="new-password"
                  />
                  {errors.confirmPassword && <span className={errorClass}><AlertCircle size={14}/>{errors.confirmPassword.message}</span>}
                </div>
              </Accordion.Content>
            </Accordion.Item>

            {/* Dados Profissionais */}
            <Accordion.Item value="professional" className={accordionItemClass + " md:mb-6"}>
              <Accordion.Header>
                <Accordion.Trigger className={accordionTriggerClass + " md:text-xl md:px-8 md:py-5"}>
                  <span>Dados Profissionais</span>
                  <ChevronDown className="h-5 w-5 ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={accordionContentClass + " md:px-8 md:pb-8 md:pt-4"}>
                <div className="mb-4">
                  <label htmlFor="professionalArea" className={labelClass}>Área Profissional</label>
                  <select
                    id="professionalArea"
                    {...register("professionalArea", { required: "Área profissional é obrigatória" })}
                    className={inputClass + " md:text-lg md:py-3"}
                  >
                    <option value="">Selecione</option>
                    {PROFESSIONAL_AREAS.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                  {errors.professionalArea && <span className={errorClass}><AlertCircle size={14}/>{errors.professionalArea.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="specificSpecialty" className={labelClass}>Especialidade Específica</label>
                  <input
                    id="specificSpecialty"
                    type="text"
                    {...register("specificSpecialty", { required: "Especialidade específica é obrigatória" })}
                    className={inputClass + " md:text-lg md:py-3"}
                  />
                  {errors.specificSpecialty && <span className={errorClass}><AlertCircle size={14}/>{errors.specificSpecialty.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="registrationNumber" className={labelClass}>Número do registro profissional</label>
                  <input
                    id="registrationNumber"
                    type="text"
                    {...register("registrationNumber", { required: "Número do registro é obrigatório" })}
                    className={inputClass + " md:text-lg md:py-3"}
                  />
                  {errors.registrationNumber && <span className={errorClass}><AlertCircle size={14}/>{errors.registrationNumber.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="council" className={labelClass}>Conselho</label>
                  <select
                    id="council"
                    {...register("council", { required: "Conselho é obrigatório" })}
                    className={inputClass + " md:text-lg md:py-3"}
                  >
                    <option value="">Selecione</option>
                    {COUNCILS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.council && <span className={errorClass}><AlertCircle size={14}/>{errors.council.message}</span>}
                </div>
                <div className="mb-2">
                  <label htmlFor="uf" className={labelClass}>Estado do Conselho (UF)</label>
                  <select
                    id="uf"
                    {...register("uf", { required: "UF é obrigatória" })}
                    className={inputClass + " md:text-lg md:py-3"}
                  >
                    <option value="">Selecione</option>
                    {UFS.map((uf) => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                  {errors.uf && <span className={errorClass}><AlertCircle size={14}/>{errors.uf.message}</span>}
                </div>
              </Accordion.Content>
            </Accordion.Item>

            {/* Sobre */}
            <Accordion.Item value="about" className={accordionItemClass + " md:mb-6"}>
              <Accordion.Header>
                <Accordion.Trigger className={accordionTriggerClass + " md:text-xl md:px-8 md:py-5"}>
                  <span>Sobre</span>
                  <ChevronDown className="h-5 w-5 ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={accordionContentClass + " md:px-8 md:pb-8 md:pt-4"}>
                <div className="mb-4">
                  <label htmlFor="bio" className={labelClass}>Mini bio/currículo (opcional)</label>
                  <textarea
                    id="bio"
                    {...register("bio")}
                    className={inputClass + " resize-none min-h-[80px] md:text-lg md:py-3"}
                    rows={3}
                  />
                </div>
                {error && <div className={errorClass + " justify-center mb-2"}><AlertCircle size={18}/>{error}</div>}
                {success && <div className={successClass}><CheckCircle2 size={18}/>{success}</div>}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 md:py-4 rounded-lg font-bold text-lg md:text-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Registrar"}
                </button>
                <div className="mt-4 text-center">
                  <a
                    href="/login"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Já tem uma conta? Entrar
                  </a>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </form>
      </div>
    </>
  );
};

export default RegisterPage; 