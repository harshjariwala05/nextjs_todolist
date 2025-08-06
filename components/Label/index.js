'use client';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Label({ labels, setLabels }) {
    const [input, setInput] = useState('');

    const handleKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === ',') && input.trim() !== '') {
            e.preventDefault();
            const newLabel = input.trim();
            if (!labels.includes(newLabel)) {
                setLabels([...labels, newLabel]);
            }
            setInput('');
        }
    };

    const removeLabel = (index) => {
        const updated = [...labels];
        updated.splice(index, 1);
        setLabels(updated);
    };

    return (
        <div className="w-full px-3 py-2 border border-[8E939B] rounded-md flex flex-wrap items-center gap-2 min-h-[44px]">
            {labels.map((label, index) => (
                <span
                    key={index}
                    className="flex items-center font-bold text-[#442773] bg-[#c5c9ed] text-sm px-2 py-1 rounded-full cursor-pointer transition duration-200"
                >
                    {label}
                    <CloseIcon
                        fontSize="small" cursor="pointer"
                        onClick={() => removeLabel(index)}
                        className="ml-1 text-[#442773] hover:text-gray-200 font-bold"
                    />
                </span>
            ))
            }
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={labels.length === 0 ? 'Add labels...' : ''}
                className="flex-1 outline-none text-sm py-1 text-gray-900 placeholder-gray-500 focus:ring-0"
            />
        </div>
    );
}
