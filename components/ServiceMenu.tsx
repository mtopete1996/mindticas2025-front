'use client';

import { createListCollection } from '@chakra-ui/react';
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';

import React from 'react';
import { useBookingContext } from '@/context/BookingContext';

export default function ServiceMenu() {
    const services = createListCollection({
        items: [
            { label: 'Barba', value: 'barba' },
            { label: 'Pelo', value: 'pelo' },
            { label: 'Barba y pelo', value: 'barba y pelo' },
        ],
    });

    const { service, setService } = useBookingContext();

    const handleServiceSelect = (selectedValue: string[]) => {
        setService(selectedValue.toString());
    };

    return (
        <SelectRoot
            value={[service]}
            onValueChange={(e) => handleServiceSelect(e.value)}
            collection={services}
            size='lg'
            maxW='sm'
            p={3}
        >
            <SelectLabel fontWeight='bold' ps='1' fontSize='lg'>
                Servicio a realizar
            </SelectLabel>
            <SelectTrigger border='black solid 1px'>
                <SelectValueText
                    cursor='pointer'
                    p='2'
                    placeholder='Selecciona un servicio'
                />
            </SelectTrigger>
            <SelectContent backgroundColor='white'>
                {services.items.map((service) => (
                    <SelectItem
                        cursor='pointer'
                        _hover={{ backgroundColor: 'gray.100' }}
                        backgroundColor='white'
                        item={service}
                        key={service.value}
                        p={2}
                    >
                        {service.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    );
}
