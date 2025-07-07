export const useNavigate = () => {
  return (url: string, preventBack?: boolean) => {
    if(preventBack === true) window.location.replace(url);
    else window.location.href = url;
  }
}
