import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaArrowRight, FaGithub, FaLinkedin, FaEnvelope,
  FaSearch, FaMoon, FaSun,
} from 'react-icons/fa';
import {
  Overlay, Modal, SearchRow, SearchInput, CommandList,
  GroupLabel, CommandItem, PaletteFooter, Kbd, EmptyMsg,
} from './CommandPalette.styles';

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const buildCommands = toggleTheme => [
  { id: 'about',     label: 'Go to About',     group: 'Navigate', icon: <FaArrowRight />, action: () => scrollTo('about') },
  { id: 'education', label: 'Go to Education', group: 'Navigate', icon: <FaArrowRight />, action: () => scrollTo('education') },
  { id: 'skills',    label: 'Go to Skills',    group: 'Navigate', icon: <FaArrowRight />, action: () => scrollTo('skills') },
  { id: 'projects',  label: 'Go to Projects',  group: 'Navigate', icon: <FaArrowRight />, action: () => scrollTo('projects') },
  { id: 'contact',   label: 'Go to Contact',   group: 'Navigate', icon: <FaArrowRight />, action: () => scrollTo('contact') },
  { id: 'github',    label: 'Open GitHub',     group: 'Links', icon: <FaGithub />,   action: () => window.open('https://github.com/davidqm7', '_blank') },
  { id: 'linkedin',  label: 'Open LinkedIn',   group: 'Links', icon: <FaLinkedin />, action: () => window.open('https://www.linkedin.com/in/david-quintanilla-386621272/', '_blank') },
  { id: 'email',     label: 'Send Email',      group: 'Links', icon: <FaEnvelope />, action: () => { window.location.href = 'mailto:davidqm7@outlook.com'; } },
  { id: 'theme',     label: 'Toggle Dark Mode', group: 'Actions', icon: <FaMoon />,   action: toggleTheme },
];

const CommandPalette = ({ toggleTheme }) => {
  const [open, setOpen]   = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const commands = buildCommands(toggleTheme);

  const filtered = query.trim()
    ? commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
  }, []);

  const run = useCallback(cmd => {
    close();
    setTimeout(() => cmd.action(), 120);
  }, [close]);

  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('openCommandPalette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('openCommandPalette', onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  const onKeyDown = e => {
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && filtered[active]) run(filtered[active]);
  };

  const groups = [...new Set(filtered.map(c => c.group))];

  return (
    <AnimatePresence>
      {open && (
        <Overlay onClick={close}>
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 560 }}
          >
            <Modal>
              <SearchRow>
                <FaSearch />
                <SearchInput
                  ref={inputRef}
                  placeholder="Search commands…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                />
              </SearchRow>

              <CommandList>
                {filtered.length === 0 && <EmptyMsg>No results for "{query}"</EmptyMsg>}
                {groups.map(group => (
                  <div key={group}>
                    <GroupLabel>{group}</GroupLabel>
                    {filtered
                      .filter(c => c.group === group)
                      .map(cmd => {
                        const idx = filtered.indexOf(cmd);
                        return (
                          <CommandItem
                            key={cmd.id}
                            $active={idx === active}
                            onMouseEnter={() => setActive(idx)}
                            onClick={() => run(cmd)}
                          >
                            {cmd.icon}
                            {cmd.label}
                          </CommandItem>
                        );
                      })}
                  </div>
                ))}
              </CommandList>

              <PaletteFooter>
                <span><Kbd>↑</Kbd><Kbd>↓</Kbd> navigate</span>
                <span><Kbd>↵</Kbd> select</span>
                <span><Kbd>Esc</Kbd> close</span>
              </PaletteFooter>
            </Modal>
          </motion.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
