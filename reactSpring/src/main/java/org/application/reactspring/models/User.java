package org.application.reactspring.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;


@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_info")
public class User {
    @Id
    @UuidGenerator
    private String id;
    @Column(unique=true ,length = 100,nullable=false ,updatable=false)
    private String username;
    @Column(length = 100,nullable=false)
    private String name;
    @Column(unique=true, nullable=false,updatable=false)
    private String email;


}
