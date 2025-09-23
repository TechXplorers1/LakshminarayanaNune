"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { LoaderCircle, Sparkles } from "lucide-react";

type HandleAgileTransition = (
  prevState: { output: string | null; error: string | null },
  formData: FormData
) => Promise<{ output: string | null; error: string | null }>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get AI-Powered Tips
        </>
      )}
    </Button>
  );
}

export function AgileTransitionForm({
  action,
}: {
  action: HandleAgileTransition;
}) {
  const initialState = { output: null, error: null };
  const [state, formAction] = useActionState(action, initialState);

  return (
    <div className="space-y-6">
      <Card className="w-full">
        <form action={formAction}>
          <CardContent className="p-0">
            <Textarea
              name="organizationCulture"
              placeholder="e.g., We have a hierarchical structure with siloed departments. Decisions are top-down, and there is a general resistance to change. We value stability over innovation..."
              rows={6}
              required
              minLength={20}
              className="focus:ring-primary text-base"
            />
          </CardContent>
          <CardFooter className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-grow">
              {state?.error && (
                <p className="text-sm font-medium text-destructive">
                  {state.error}
                </p>
              )}
            </div>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      {state?.output && (
        <Card className="bg-background animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="text-primary font-headline">Your Personalized Agile Transition Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap font-medium text-foreground/80 prose prose-p:text-foreground/80 prose-li:text-foreground/80">{state.output}</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
