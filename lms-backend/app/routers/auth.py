# app/routers/auth.py

from fastapi import APIRouter, HTTPException, Depends
from app.schemas.user import UserCreate, UserResponse
from app.firebase import auth as firebase_auth

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup", response_model=UserResponse)
def signup(user: UserCreate):
    try:
        user_record = firebase_auth.create_user(
            email=user.email,
            password=user.password,
            display_name=user.display_name
        )
        return UserResponse(uid=user_record.uid, email=user_record.email, display_name=user_record.display_name)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
