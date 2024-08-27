package com.backend.spring.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

@Aspect
@Component
public class DemoLoggingAspect {
    // Set up logger
    private Logger myLogger = Logger.getLogger(getClass().getName());

    // Setup pointcut declarations
    @Pointcut("execution(* com.luv2code.springboot.demosecurity.controller.*.*(..))")
    private void forControllerPackage() {}

    @Pointcut("execution(* com.luv2code.springboot.demosecurity.dao.*.*(..))")
    private void forDaoPackage() {}

    @Pointcut("execution(* com.luv2code.springboot.demosecurity.service.*.*(..))")
    private void forServicePackage() {}

    @Pointcut("forControllerPackage() || forServicePackage() || forDaoPackage()")
    private void forAppFlow() {}

    // Add @Before advice
    @Before("forAppFlow()")
    public void before(JoinPoint theJoinPoint) {
        // Display method
        String theMethod = theJoinPoint.getSignature().toShortString();
        myLogger.info("=====> in @Before: calling method: " + theMethod);

        // Display the arguments to the method
        Object[] args = theJoinPoint.getArgs();
        for (Object tempArg : args) {
            myLogger.info("=====?> argument: " + tempArg);
        }
    }

    @AfterReturning(
            pointcut = "forAppFlow()",
            returning = "theResult"
    )
    public void afterReturning(JoinPoint theJoinPoint, Object theResult) {
        // Display method we are returning from
        String theMethod = theJoinPoint.getSignature().toShortString();
        myLogger.info("=====> in @AfterReturning: calling method: " + theMethod);

        // Display data returned
        myLogger.info("===> result: " + theResult);
    }

    @AfterThrowing(pointcut = "forAppFlow()", throwing = "theException")
    public void afterThrowing(JoinPoint theJoinPoint, Throwable theException) {
        // Display method that threw exception
        String theMethod = theJoinPoint.getSignature().toShortString();
        myLogger.warning("=====> in @AfterThrowing: method: " + theMethod);

        // Log the exception
        myLogger.warning("===> exception: " + theException);
    }
}
