import React from "react";

// components
import { UploadButton, UploadDropzone } from "@/components/uploadthing";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { memoryRatings } from "@/constants/memory";
import { getFirstObjectKey, getLastObjectKey } from "@/lib/data-utils";

const AddMemoryForm = (props: any) => {
  const {
    formState: { errors, isSubmitting },
    control,
    register,
    handleFormSubmit,
    handleSubmit,
    getValues
  } = props;

  const getMemoryRatingBackground = (value: number): string => {
    return memoryRatings[value]?.colorClass;
  };

  const getMemoryRatingType = (value: number): string => {
    return memoryRatings[value]?.label;
  };

  return (
    <section className="min-w grid grid-cols-2 gap-10 py-10">
      <div className="col-span-1">
        <UploadDropzone
          endpoint="memoryFile"
          onClientUploadComplete={res => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      <div className="col-span-1">
        <Form {...props}>
          <form onSubmit={(e) => {e.preventDefault(); handleSubmit(handleFormSubmit)}} className="space-y-8">
            <FormField
              control={control}
              name="memoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Give your memory a name</FormLabel>
                  <FormControl>
                    <Input placeholder="Memory name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="memoryDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Give your memory a description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Memory description"
                      className="bg-green resize-none scrollbar-thin scrollbar-thumb-foreground scrollbar-track-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="memoryRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate your memory</FormLabel>
                  <FormControl className="pt-10">
                    <Slider
                      min={getFirstObjectKey(memoryRatings) - 1}
                      max={getLastObjectKey(memoryRatings)}
                      value={[field.value]}
                      rangeStyles={{
                        backgroundColor: getMemoryRatingBackground(Math.ceil(field.value)),
                      }}
                      onValueChange={([x]: number[]) => field.onChange(x <= 0 ? 1 : x)}
                      thumbLabel={getMemoryRatingType(Math.ceil(field.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="button" onClick={() => console.log(getValues(), errors)}>Log</Button>
            <Button type="submit" disabled={isSubmitting}>Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AddMemoryForm;
