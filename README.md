# Backoffice Client

Đây là một ưng dụng web được xây dựng bằng React và TypeScript, cung cấp giao diện quản trị cho hệ thống Backoffice. 
Ứng dụng này cho phép người dùng quản lý các tài nguyên, xem báo cáo và thực hiện các tác vụ quản trị khác.

## Cấu trúc file

Sử dụng ý tưởng từ Feature-based structure để tổ chức mã nguồn, cấu trúc thư mục chính của dự án như sau:

```
.
├── public/                 # Thư mục chứa các file tĩnh
├── src/                    # Thư mục chứa mã nguồn chính của ứng dụng
│   ├── assets/             # Thư mục chứa các tài nguyên như hình ảnh
│   ├── components/         # Thư mục chứa các thành phần React tái sử dụng
│   │   ├── form/           # Thư mục chứa các thành phần liên quan đến form
│   │   ├── language/       # Thư mục chứa các thành phần liên quan đến ngôn ngữ
│   │   ├── layout/         # Thư mục chứa các thành phần liên quan đến bố cục
│   │   ├── table/          # Thư mục chứa các thành phần liên quan đến bảng
│   │   └── ...             # Các thành phần khác
│   ├── features/           # Thư mục chứa các tính năng chính của ứng dụng
│   │   ├── auth/           # Thư mục chứa các file liên quan đến xác thực
│   │   ├── dashboard/      # Thư mục chứa các file liên quan đến bảng điều khiển
│   │   ├── user/           # Thư mục chứa các file liên quan đến người dùng
│   │   └── ...             # Các tính năng khác
│   ├── routes/             # Thư mục chứa các định tuyến của ứng dụng
│   ├── configs/            # Thư mục chứa các file cấu hình
│   ├── hooks/              # Thư mục chứa các custom hooks
│   ├── languages/          # Thư mục chứa các file ngôn ngữ cho đa ngôn ngữ
│   ├── networks/           # Thư mục chứa các file liên quan đến mạng (API calls, socket, v.v.)
│   ├── redux/              # Thư mục chứa các file liên quan đến Redux (actions, reducers, store)
│   ├── utils/              # Thư mục chứa các tiện ích
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
```

## Thư viện sử dụng

Cần nắm được cơ bản và tìm hiểu qua các chức năng, API, ... của các thư viện sau để có thể phát triển và bảo trì ứng dụng:

- React: Thư viện chính để xây dựng giao diện người dùng. (https://react.dev/)
- TypeScript: Ngôn ngữ lập trình được sử dụng để viết mã nguồn. (https://www.typescriptlang.org/)
- ReduxToolkit: Thư viện để quản lý trạng thái ứng dụng. (https://redux-toolkit.js.org/)
- Tanstack Query: Thư viện để quản lý dữ liệu và trạng thái từ server. (https://tanstack.com/query/latest)
- Tanstack Router: Thư viện để quản lý định tuyến trong ứng dụng. (https://tanstack.com/router/latest)
- Tanstack Form: Thư viện để xây dựng và quản lý các biểu mẫu. (https://tanstack.com/form/latest)
- i18next: Thư viện để hỗ trợ đa ngôn ngữ. (https://www.i18next.com/)
- Axios: Thư viện để thực hiện các yêu cầu HTTP. (https://axios-http.com/)
- Tailwind CSS: Thư viện để xây dựng giao diện người dùng với các lớp tiện ích. (https://tailwindcss.com/)

## Quy định

- Luôn sử dụng TypeScript để đảm bảo mã nguồn an toàn và dễ bảo trì.
- Không được sử dụng type `any`, thay vào đó hãy sử dụng các kiểu dữ liệu cụ thể.
- Luôn chạy kiểm tra eslint và prettier trước khi commit mã nguồn.
