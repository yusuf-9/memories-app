import React from "react";
import zod from "zod";
import axios from "axios"

// components
import AddMemoryForm from "./form";

// form utils
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = zod.object({
  memoryName: zod.string().min(1, { message: "Memory name is required" }),
  memoryDescription: zod.string().min(1, { message: "Memory description is required" }),
  memoryRating: zod.number().min(1, { message: "Memory nature is required" }),
  memoryImage: zod.string().optional(),
});

type formTypes = zod.infer<typeof formSchema>;

const defaultValues = {
  memoryName: "",
  memoryDescription: "",
  memoryImage: "asdasdasdasd",
  memoryRating: 4,
};

const AddMemoryFormContainer = () => {
  const form = useForm<formTypes>({ resolver: zodResolver(formSchema), defaultValues });

  const handleFormSubmit : SubmitHandler<formTypes> = async (data: any) => {
    const response = await axios.post('/api/auth', data);
    console.log({response})
  }

  const formProps = {
    ...form,
    handleFormSubmit,
  }

  return <AddMemoryForm {...formProps}/>;
};

export default AddMemoryFormContainer;
