interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받기위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ...
}

// Product에 일부분만 가져옴(중복이 많아짐)
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// Product에 일부만 뽑아내려면?
// 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;

function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {
  // ...
}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// Product 모든 부분을 옵셔널처리
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {}

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// 축약 #1
// type UserProfileUpdate = {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// 축약 #2 (맵드타입)
// type UserProfileUpdate = {
//   [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
// };

// 축약 #3
// type UserProfileKeys = keyof UserProfile;
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// 최종 #4
type Subset<T> = {
  [p in keyof T]?: T[p];
};

let products: Product[] = [
  { id: 1, name: "참치김밥", price: 3000, brand: "김가네", stock: 3 },
];

const productDetail: Product = {
  id: 1,
};

// #2 - Pick
type PickFewThings<T, K extends keyof T> = {
  [P in K]: T[P];
};

const productName: PickFewThings<Product, "name"> = {};
const productNameWithPrice: PickFewThings<Product, "name" | "price"> = {};
