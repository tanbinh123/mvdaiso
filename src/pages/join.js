/** 
 *  Title : View - Join
 *  Date : 2021.10.14
 *  Des : 회원가입 페이지
 *  @honeypigman
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
// import Loading from '../components/loading';

const loginPage = (props) => {
    return (
        <div className="layout-margin">
            <header className="text-center p-2 text-3xl md:p-3 md:text-4xl">
                <Header />
            </header>
            <main className="flex w-full flex items-center justify-center p-3">
                <div className="w-full bg-gray-50 p-5 flex flex-col space-y-3 shadow-lg rounded-lg ">
                    <div className="flex">
                        <div className="w-full text-gray-500">
                            <label htmlFor="" className="text-xs font-semibold px-1"><span className="text-red-400">*</span> 이메일</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="james@example.com" />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full text-gray-500">
                            <label htmlFor="" className="text-xs font-semibold px-1"><span className="text-red-400">*</span> 비밀번호</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full text-gray-500">
                            <label htmlFor="" className="text-xs font-semibold px-1">성별</label>
                            <div className="flex space-x-5">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-checkbox h-5 w-5 text-red-600" name="sex" /><span className="ml-1">남성</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-checkbox h-5 w-5 text-orange-600" name="sex" /><span className="ml-1">여성</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full text-gray-500">
                            <label htmlFor="" className="text-xs font-semibold px-1">나이</label>
                            <div className="flex">

                                <select className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required">
                                    <option value="">10대</option>
                                    <option value="" disabled>___________________</option>
                                    <option value="">20대 초반</option>
                                    <option value="">20대 중반</option>
                                    <option value="">20대 후반</option>
                                    <option value="" disabled>___________________</option>
                                    <option value="">30대 초반</option>
                                    <option value="">30대 중반</option>
                                    <option value="">30대 후반</option>
                                    <option value="" disabled>___________________</option>
                                    <option value="">40대 초반</option>
                                    <option value="">40대 중반</option>
                                    <option value="">40대 후반</option>
                                    <option value="" disabled>___________________</option>
                                    <option value="">50대 초반</option>
                                    <option value="">50대 중반</option>
                                    <option value="">50대 후반</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button className="w-full h-12 rounded-lg bg-red-300 text-grew-white uppercase hover:bg-red-400 text-white mb-4" onClick={() => (props.history.goBack())}>취소</button>
                        <button className="w-full h-12 rounded-lg bg-gray-300 text-grew-white uppercase hover:bg-gray-400 text-white mb-4">완료</button>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
};

export default loginPage;