import { CenterSLoadingRing, LabeledTextArea, TextInput, UIButton } from "@components/common";
import { useCreateUpdateGuest } from "@gql/requests/mutations/hooks";
import React from "react";

interface GuestFormProps {
    onSuccess?: () => void;
};


export default function GuestForm(props: GuestFormProps) {
    const [mutate, { loading }] = useCreateUpdateGuest();
    const nameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        mutate({ variables: {
            name: nameRef.current.value,
            description: descRef.current.value
        }})
        props.onSuccess && props.onSuccess();
    }

    if (loading) return <CenterSLoadingRing />;
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <TextInput ref={nameRef} placeholder="Guests Name"/>
            <LabeledTextArea ref={descRef} placeholder="More information about this guest" label="Description"/>
            <UIButton type="button" onClick={handleSubmit} variant="Black" className="self-end" >Save</UIButton>
        </form>
    )
};
