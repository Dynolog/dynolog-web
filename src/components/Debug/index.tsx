export const Debug = ({ data }: { data: any }) => (
    <pre>{JSON.stringify(data, null, 4)}</pre>
)