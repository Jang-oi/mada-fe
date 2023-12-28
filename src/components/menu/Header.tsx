import {Button, Stack, Sheet} from '@mui/joy';

import {menuData} from "../../utils/commonUits";

import {useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    return (
        <Sheet
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'fixed',
                top: 0,
                width: '100vw',
                height: 'var(--Header-height)',
                zIndex: 9995,
                p: 3,
                borderBottom: '1px solid',
                borderColor: 'background.level2',
                backgroundColor: '#096BCB'
            }}
        >
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                {menuData.map((menuItem, index) => (
                    <Button variant={"plain"} size="lg" key={index} sx={{alignSelf: 'center', color: 'white', fontSize: '20px'}}
                            onClick={() => {navigate(`${menuItem.url}`)}}>
                        {menuItem.menu}
                    </Button>
                ))}
            </Stack>
        </Sheet>
    );
}