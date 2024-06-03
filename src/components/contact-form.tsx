'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

const formSchema = z.object({
  userName: z.string().min(1, 'Nome deve conter ao menos 1 caracter'),
  userEmail: z.string().email('Email Inválido'),
  projectName: z
    .string()
    .min(1, 'Nome do projeto deve conter ao menos 1 caracter'),
  projectTechnologies: z
    .string()
    .min(1, 'Tecnologias do projeto devem conter ao menos 1 caracter'),
  description: z.string().min(1, 'Descrição deve conter ao menos 1 caracter'),
})

type FormSchema = z.infer<typeof formSchema>

const MAX_LENGTH = 273

export function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      userEmail: '',
      projectName: '',
      projectTechnologies: '',
      description: '',
    },
  })

  function onSubmit(values: FormSchema) {
    const text = `
    Nome: ${values.userName}
    Email: ${values.userEmail}
    Nome do projeto: ${values.projectName}
    Tecnologias usadas: ${values.projectTechnologies}
    Descrição: ${values.description}
    `

    if (text.length > MAX_LENGTH) {
      toast.error('Maxímo de 273 caracteres atingido, por favor, diminua o texto.')
      return
    }

    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/558699503658?text=${encodedText}`
    window.open(whatsappUrl, '_blank')

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 w-full lg:max-w-md lg:mx-auto">
        <div className="space-y-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="userName" className="opacity-80">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              {...register('userName')}
              className="w-full max-w-[570px] border border-slate-400 dark:border-slate-500 rounded-lg outline-none px-4 py-3 focus:border-slate-700 bg-transparent"
            />
          </div>

          {errors.userName?.message && (
            <p className="text-red-500 text-xs">{errors.userName.message}</p>
          )}
        </div>
        <div className="space-y-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="userEmail" className="opacity-80">
              Email
            </label>
            <input
              type="text"
              placeholder="Digite seu email..."
              {...register('userEmail')}
              className="w-full max-w-[570px] border border-slate-400 dark:border-slate-500 rounded-lg outline-none px-4 py-3 focus:border-slate-700 bg-transparent"
            />
          </div>

          {errors.userEmail?.message && (
            <p className="text-red-500 text-xs">{errors.userEmail.message}</p>
          )}
        </div>
        <div className="space-y-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="projectName" className="opacity-80">
              Nome do seu projeto
            </label>
            <input
              type="text"
              placeholder="Digite o nome do seu projeto..."
              {...register('projectName')}
              className="w-full max-w-[570px] border border-slate-400 dark:border-slate-500 rounded-lg outline-none px-4 py-3 focus:border-slate-700 bg-transparent"
            />
          </div>

          {errors.projectName?.message && (
            <p className="text-red-500 text-xs">{errors.projectName.message}</p>
          )}
        </div>
        <div className="space-y-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="projectTechnologies" className="opacity-80">
              Tecnologias que serão usadas
            </label>
            <input
              type="text"
              placeholder="Digite as tecnologias que serão usadas. (Separe por vírgulas)"
              {...register('projectTechnologies')}
              className="w-full max-w-[570px] border border-slate-400 dark:border-slate-500 rounded-lg outline-none px-4 py-3 focus:border-slate-700 bg-transparent"
            />
          </div>

          {errors.projectTechnologies?.message && (
            <p className="text-red-500 text-xs">
              {errors.projectTechnologies.message}
            </p>
          )}
        </div>

        <div className="space-y-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="opacity-80">
              Descrição
            </label>
            <textarea
              placeholder="Fale um pouco sobre o seu projeto..."
              {...register('description')}
              className="w-full max-w-[570px] min-h-14 border border-slate-400 dark:border-slate-500 rounded-lg outline-none px-4 py-3 focus:border-slate-700 bg-transparent"
            />
          </div>

          {errors.description?.message && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )}
        </div>
      </div>

      <button className="my-8 w-56 h-[52px] bg-secondary/90 text-white font-semibold uppercase px-6 rounded-lg disabled:bg-secondary/80 select-none shadow-md transition-opacity duration-300 lg:mx-auto lg:block hover:opacity-90">
        Enviar
      </button>
    </form>
  )
}
