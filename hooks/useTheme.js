import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에만 실행
    setMounted(true);
    
    // localStorage에서 테마 설정 불러오기
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // 시스템 테마 감지
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // 테마 변경 시 localStorage에 저장
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      // body 태그에 클래스 추가/제거
      document.body.classList.toggle('dark-mode', isDarkMode);
    }
  }, [isDarkMode, mounted]);

  // mounted 상태와 현재 테마 반환
  return {
    isDarkMode,
    setIsDarkMode,
    mounted
  };
};