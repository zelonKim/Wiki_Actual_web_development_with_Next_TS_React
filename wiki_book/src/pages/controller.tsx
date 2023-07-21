import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox'

type MyFormData = {
    isChecked: boolean
}


export default function App() {
    const {handleSubmit, control, formState: { errors }} = useForm<MyFormData>()

    const onSubmit: SubmitHandler<MyFormData> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="isChecked"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field: {onChange, value} }) => <Checkbox onChange={onChange} value={value} />}
                />
                {errors.isChecked && <label>체크해 주세요</label>}

                <input type="submit" />
        </form>
    )
}

////////////////


import useSWR from 'swr'

type User = {
    name: string
}

const Profile = () => {
    const { data, error } = useSWR<User>('/api/user', fetcher)

    if(error) return <div>failed to load</div>
    if (!data) return <div> loading... </div>
    return <div> Hello {data.name}! </div>
}